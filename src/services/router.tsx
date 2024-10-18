import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/Home";
import Library from "../views/Library";
import Gallery from "../views/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);

export default router;
