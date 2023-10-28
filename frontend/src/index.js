import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import News from "./newsfeed.js";
import Projects from "./projects.js";

const router = createBrowserRouter([{
    path: "/",
    element: <Projects/>,
  },
  {
    path: "news",
    element: <News />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
