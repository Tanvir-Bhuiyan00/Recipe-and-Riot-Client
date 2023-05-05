import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

import ViewRecipes from "../pages/Home/ViewRecipes/ViewRecipes";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Terms from "../pages/Shared/Terms/Terms";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/Home/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ViewRecipes></ViewRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://recipe-and-riot-server-tanvir-bhuiyan00.vercel.app/chef/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path:"about",
        element: <About></About>
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
]);

export default router;
