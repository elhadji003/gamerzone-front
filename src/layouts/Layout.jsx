import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
   
    return (
        <div className="bg-gray-900 min-h-screen flex">
            <Sidebar/>
            <main className="flex-1 p-4 bg-black overflow-y-auto h-screen">
                <Outlet />
            </main>
        </div>
    );
};


export default Layout;