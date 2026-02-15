import { createBrowserRouter } from "react-router";
import SeminarForm from "../App";
import ShowUsers from "../components/ShowUsers";
import UpdateName from "../components/UpdateName";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SeminarForm/>,
  },
  {
    path: "/users",
    element: <ShowUsers/>,
  },
  {
    path: "/user/:id",
    element: <UpdateName/>,
    loader:({params})=>fetch(`http://localhost:5000/${params.id}`)
  },
]);

export default router