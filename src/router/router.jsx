import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layout/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
]);


export default router;