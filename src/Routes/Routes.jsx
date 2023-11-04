import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Components/Pages/Home/Home";
import Register from "../Components/Pages/Register/Register";


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
            }
        ]
    }
])

export default routes;