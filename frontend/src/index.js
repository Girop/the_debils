import * as React from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter, Outlet, RouterProvider,
} from "react-router-dom";
import News from "./newsfeed.js";
import Projects from "./projects.js";
import {Alert, Fab, Snackbar, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material";
import Menubar from "./menubar.js";
import {ProjectContext} from "./projectcontext.js";
import BigView from "./projectbigview.js";
import {Add} from "@mui/icons-material";
import {useEffect, useState} from "react";
import NewProjectDialog from "./newprojectdialog";
import {SERVER_ADDRESS} from "./common";
import logo from "./lokalnie_logo_blue.png";

const ProposeProjectButton = ({setProposeProjectModalOpen}) => {
    return <Fab variant={"extended"} color='secondary' size='medium'
                sx={{position: "fixed", bottom: 24, right: 24}}
                onClick={() => setProposeProjectModalOpen(true)}>
        Zaproponuj projekt... <Add sx={{ml: 1}}/>
    </Fab>
};

function ProjectView() {
    const [tagsList, setTagsList] = useState([]);
    const [projectsList, setProjectsList] = useState([]);
    const [proposeProjectModalOpen, setProposeProjectModalOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarText, setSnackbarText] = useState("");

    useEffect(() => {
        fetch(SERVER_ADDRESS + "/getProjects", {method: "GET"}).then((response) => {
            response.json().then((json) => {
                setProjectsList(json);
            });
        }).catch(() => {
            setSnackbarOpen(true);
            setSnackbarText("Wystąpił błąd podczas pobierania danych z serwera!");
        });

        fetch(SERVER_ADDRESS + "/getTags", {method: "GET"}).then((response) => {
            response.json().then((json) => {
                setTagsList(json);
            });
        }).catch(() => {
            setSnackbarOpen(true);
            setSnackbarText("Wystąpił błąd podczas pobierania danych z serwera!");
        });
    }, []);

    return (<>
        <Projects tagsList={tagsList} projectsList={projectsList} setSnackbarOpen={setSnackbarOpen}
                  setSnackbarText={setSnackbarText}/>
        <ProposeProjectButton setProposeProjectModalOpen={setProposeProjectModalOpen}/>
        <NewProjectDialog
            tagsList={tagsList}
            isOpen={proposeProjectModalOpen}
            onClose={() => setProposeProjectModalOpen(false)}
            projectsList={projectsList}
            setSnackbarOpen={setSnackbarOpen}
            setSnackbarText={setSnackbarText}
        />
        <Snackbar open={snackbarOpen} autoHideDuration={4500} onClose={() => setSnackbarOpen(false)}>
            <Alert severity={"error"}>{snackbarText}</Alert>
        </Snackbar>
    </>)
}

const RouterElement = () => (<>
    <img src={logo} alt={"logo"} style={{margin: "2em auto", display: "block"}}/>
    <Outlet/>
</>);

const router = createBrowserRouter([{
    element: <RouterElement/>, children: [{
        path: "/", element: <>
            <Menubar/>
            <ProjectView/>
        </>
    }, {
        path: "news", element: <>
            <Menubar/>
            <News/>
        </>
    }, {
        path: "bigProjectView", element: <BigView/>
    }]
}]);

const theme = createTheme({
    palette: {
        primary: {
            main: "#374f59"
        }, secondary: {
            main: "#68902b"
        }
    }, typography: {
        fontFamily: "Roboto, monospace"
    }
});


function ProjectWrapper() {
    const [bigPage, setPage] = React.useState({});

    return (<ThemeProvider theme={theme}>
        <ProjectContext.Provider value={{bigPage, setPage}}>
            <RouterProvider router={router}/>
        </ProjectContext.Provider>
    </ThemeProvider>)
}


createRoot(document.getElementById("root")).render(<ProjectWrapper/>);
