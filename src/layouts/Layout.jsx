import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import useScroll from "../hooks/useScroll";

const Layout = () => {
    const isScrolled = useScroll();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex flex-col h-screen">
            {/* Navbar fixée en haut */}
            <div className={`fixed w-full top-0 left-0 z-10 h-16 transition ${isScrolled ? "bg-gray-800" : ""}`}>
                <Navbar />
            </div>

            {/* Ajout d'un padding-top pour éviter la superposition avec la navbar */}
            <div className="flex flex-1 bg-black pt-16">
                <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
                <main className={`p-4 text-white overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
