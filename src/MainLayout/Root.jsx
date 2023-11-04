import { Outlet } from "react-router-dom";
import Nav from "../Components/Shared/Nav";

const Root = () => {
    return (
        <div className="bg-black font-newfont">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;