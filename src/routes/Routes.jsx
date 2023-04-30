import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsDetails from "../layouts/NewsDetails";
import News from "../pages/News/News/News";
import Login from "../pages/Login/Login";
import LoginLayouts from "../layouts/LoginLayouts";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayouts />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: 'terms',
        element: <Terms/>
      }
    ],
  },
  {
    path: "category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`https://the-dragon-news-server-apurbahasanj.vercel.app/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsDetails />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://the-dragon-news-server-apurbahasanj.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

export default router;
