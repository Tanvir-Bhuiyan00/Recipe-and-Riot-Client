import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

import ViewRecipes from "../pages/Home/ViewRecipes/ViewRecipes";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Blogs from "../pages/Home/Blogs/Blogs";

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
        element: <ViewRecipes></ViewRecipes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
