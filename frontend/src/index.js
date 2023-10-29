import * as React from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import News from "./newsfeed.js";
import Projects from "./projects.js";
import {Fab, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material";
import Menubar from "./menubar.js";
import {ProjectContext} from "./projectcontext.js";
import BigView from "./projectbigview.js";
import {Add} from "@mui/icons-material";
import {useEffect, useState} from "react";
import NewProjectDialog from "./newprojectdialog";
import {SERVER_ADDRESS} from "./common";

const ProposeProjectButton = ({setProposeProjectModalOpen}) => {
    return <Fab variant={"extended"} color='primary' size='medium'
                sx={{position: "fixed", bottom: "8px", right: "8px"}}
                onClick={() => setProposeProjectModalOpen(true)}>
        Zaproponuj projekt... <Add sx={{ml: 1}}/>
    </Fab>
};

function ProjectView() {
    const [tagsList, setTagsList] = useState([]);
    const [projectsList, setProjectsList] = useState([]);
    const [proposeProjectModalOpen, setProposeProjectModalOpen] = useState(false);

    useEffect(() => {
        fetch(SERVER_ADDRESS + "/getProjects", {method: "GET"}).then((response) => {
            response.json().then((json) => {
                setProjectsList(json);
                console.log(json);
            });
        });

        fetch(SERVER_ADDRESS + "/getTags", {method: "GET"}).then((response) => {
            response.json().then((json) => {
                setTagsList(json);
                console.log(json);
            });
        });
    }, []);

    return (
        <>
            <Menubar/>
            <Projects tagsList={tagsList} projectsList={projectsList}/>
            <ProposeProjectButton setProposeProjectModalOpen={setProposeProjectModalOpen}/>
            <NewProjectDialog tagsList={tagsList} isOpen={proposeProjectModalOpen}
                              onClose={() => setProposeProjectModalOpen(false)} projectsList={projectsList}/>
        </>
    )
}

function ViewsView() {
    return (
        <>
            <Menubar/>
            <News/>
        </>
    )
}

function BigProjectView() {
    return (
        <>
            <Menubar/>
            <BigView/>
        </>
    )
}

const router = createBrowserRouter([{
    path: "/",
    element: <ProjectView/>
},
    {
        path: "news",
        element: <ViewsView/>
    },
    {
        path: "bigProjectView",
        element: <BigProjectView/>
    }
]);

const theme = createTheme({
    palette: {
        primary: {
            main: "#b30000"
        }
    },
    typography: {
        fontFamily: "Roboto, monospace"
    }
});


function ProjectWrapper() {
    const [bigPage, setPage] = React.useState({});

    return (
        <ThemeProvider theme={theme}>
            <ProjectContext.Provider value={{bigPage, setPage}}>
                <RouterProvider router={router}/>
            </ProjectContext.Provider>
        </ThemeProvider>
    )
}


createRoot(document.getElementById("root")).render(
    <ProjectWrapper/>
);
