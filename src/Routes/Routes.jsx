import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Pages/Home/Home";
import Register from "../Components/Pages/Register/Register";
import Login from "../Components/Pages/Login/Login";
import AddJob from "../Components/Pages/AddJob/AddJob";
import ViewJob from "../Components/Pages/ViewJob/ViewJob";
import Myjob from "../Components/Pages/Myjob/Myjob";
import UpdateJob from "../Components/Pages/UpdateJob/UpdateJob";
import AppliedJob from "../Components/AppliedJob/AppliedJob";
import Alljob from "../Components/AllJob/Alljob";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blog from "../Components/Pages/Blog/Blog";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                 path:"/login",
                 element:<Login></Login>
            },
            {
                path:"/addjob",
                element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path:"/jobDetail/:id",
                element:<PrivateRoute><ViewJob></ViewJob></PrivateRoute>,
            },
            {
                path:"/myjob",
                element:<PrivateRoute><Myjob></Myjob></PrivateRoute>
            },
            {
                path:"/update/:id",
                element:<UpdateJob></UpdateJob>
            },
            {
                path:"/applied",
                element: <PrivateRoute><AppliedJob></AppliedJob></PrivateRoute>
            },
            {
                path:"/alljobs",
                element: <Alljob></Alljob>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            }
        ]
    }
])

export default routes;