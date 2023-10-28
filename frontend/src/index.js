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

const router = createBrowserRouter([{
        path: "/",
        element: (
            <>
                <Menubar />
                <Projects/>
            </>
        )
    ,
    },
    {
        path: "news",
        element: (
        <>
            <Menubar />
            <News/>
        </>
        ),
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

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>   
        <RouterProvider router={router}/>
    </ThemeProvider>
);
