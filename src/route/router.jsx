import { createBrowserRouter } from "react-router-dom";
import React from "react";
import RootLayout from "../layout/root";
import Home from "../pages/Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: "/Tabish-s-Portfolio",
  }
);
