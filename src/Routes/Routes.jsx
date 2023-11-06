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


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
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
                element:<AddJob></AddJob>
            },
            {
                path:"/jobDetail/:id",
                element:<ViewJob></ViewJob>,
            },
            {
                path:"/myjob",
                element:<Myjob></Myjob>
            },
            {
                path:"/update/:id",
                element:<UpdateJob></UpdateJob>
            },
            {
                path:"/applied",
                element: <AppliedJob></AppliedJob>
            },
            {
                path:"/alljobs",
                element: <Alljob></Alljob>
            }
        ]
    }
])

export default routes;