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

const router = createBrowserRouter([{
    path: "/",
    element: <Projects/>,
},
    {
        path: "news",
        element: <News/>,
    },
]);

const theme = createTheme({
    palette: {
        primary: {
            main: "#b30000"
        }
    },
    typography: {
        fontFamily: [
            "Roboto",
            "monospace"
        ]
    }
});

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
    </ThemeProvider>
);
