import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/aboutUs",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
