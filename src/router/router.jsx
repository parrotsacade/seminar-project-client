import { createBrowserRouter } from "react-router";
import SeminarForm from "../App";
import ShowUsers from "../components/ShowUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SeminarForm/>,
  },
  {
    path: "/users",
    element: <ShowUsers/>,
  },
]);

export default router