import * as React from "react";
import {createRoot} from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import News from "./newsfeed.js";
import Projects from "./projects.js";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material";
import Menubar from "./menubar.js";
import { ProjectContext } from "./projectcontext.js";
import BigView from "./projectbigview.js";


function ProjectView() {
    return (
            <>
                <Menubar />
                <Projects/>
            </>
        )
}

function ViewsView() {
    return (
        <>
            <Menubar />
            <News/>
        </>
    )
}

function BigProjectView() {
    return (
        <>
            <Menubar /> 
            <BigView />
        </>
    )
}

const router = createBrowserRouter([{
        path: "/",
        element: <ProjectView/>
    },
    {
        path: "news",
        element: <ViewsView />
    },
    {
        path: "bigProjectView",
        element: <BigProjectView />
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
