import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/Home";
import Library from "../views/Library";
import Gallery from "../views/Gallery";
import Placeholder from "../views/Placeholder";
import LearnToPlay from "../views/LearnToPlay";

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
        path: "world",
        element: <Library />,
      },
      {
        path: "armies",
        element: <Gallery />,
      },
      {
        path: "learn",
        element: <LearnToPlay />,
      },
      {
        path: "resources",
        element: <Placeholder />,
      },
    ],
  },
]);

export default router;
