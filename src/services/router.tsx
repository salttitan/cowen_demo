import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/Home";
import Library from "../views/Library";
import Gallery from "../views/Gallery";
import Placeholder from "../views/Placeholder";
import LearnToPlay from "../views/LearnToPlay";
import { loader } from "../components/Providers/AppRouteLoader";
import FactionPage from "../views/Gallery/FactionPage";
import Resources from "../views/Resources";
import { TutorialDataHandler } from "../views/LearnToPlay/TutorialPage/TutorialDataHandler";

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
        path: "World",
        element: <Library />,
      },
      {
        path: "Armies",
        element: <Gallery />,
      },
      {
        path: "Armies/:faction",
        element: <FactionPage />,
        loader: loader,
      },
      {
        path: "Learn",
        element: <LearnToPlay />,
      },
      {
        path: "Learn/Training/",
        element: <TutorialDataHandler />,
        loader: loader,
      },
      {
        path: "Learn/Training/:army",
        element: <TutorialDataHandler />,
        loader: loader,
      },
      {
        path: "Resources",
        element: <Resources />,
      },
    ],
  },
]);

export default router;
