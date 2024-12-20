import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layout/HomeLayout";
import AddJob from "../pages/AddJob";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import FindJobs from "../pages/FindJobs";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/add-job',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: '/find-job',
                element: <PrivateRoute><FindJobs /> </PrivateRoute>,

            }
        ]
    },
]);


export default router;