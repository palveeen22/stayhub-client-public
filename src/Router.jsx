import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HomePage from "./Pages/HomePage";
import CardDetails from "./Pages/Details/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "lodging/:lodgingId",
        element: <CardDetails />,
      },
    ],
  },
]);
export default router;
