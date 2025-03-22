import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog, faBars, faFile } from "@fortawesome/free-solid-svg-icons";
import imageDefaultUser from "../assets/images/image-1.avif";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { user, isLoading, error } = useSelector((state) => state.auth); // Assure-toi que ton slice Redux gère bien ces états

    const isAdmin = user?.role === "admin";

    return (
        <div className={`h-auto bg-neutral-900 text-white transition-all duration-300 ${isOpen ? "w-64 h-auto" : "w-20 h-auto"}`}>
            <div className="p-4 flex items-center justify-between border-b border-gray-700">
                {isOpen && <span className="text-xl font-bold max-sm:text-sm">FriendShip WebSite</span>}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none p-2 m-auto rounded-md transition"
                >
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </button>
            </div>

            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {[
                        {
                            to: isAdmin ? "/dashboard-admin" : "/dashboard-user",
                            icon: faHome,
                            label: "Dashboard"
                        },
                        { to: "/profile", icon: faUser, label: "Profil" },
                        { to: "/mes-article", icon: faFile, label: "Mes articles" },
                        { to: "/parametre", icon: faCog, label: "Paramètres" }].map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `flex items-center ${isOpen ? "" : "justify-center"} p-3 rounded-md transition ${isActive ? "bg-white text-black" : "hover:bg-gray-700"}`
                                    }
                                >
                                    <FontAwesomeIcon icon={item.icon} size="lg" />
                                    <span className={`ml-3 transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                                        {item.label}
                                    </span>
                                </NavLink>
                            </li>
                        ))}

                    {/* Affichage du profil utilisateur avec gestion du chargement */}
                    <li className="flex items-center p-3 rounded-md hover:bg-gray-700">
                        {isLoading ? (
                            <Loader /> // Affichage du loader
                        ) : error ? (
                            <span className="text-red-500">Erreur: {error.message}</span>
                        ) : (
                            user && (
                                <>
                                    <img
                                        src={user.profile_image_url || imageDefaultUser}
                                        alt="Profile"
                                        className={`${isOpen ? "w-10 h-10 rounded-full border-2 border-white" : "w-10 h-10 rounded-full"} transition-all duration-300 hover:scale-110`}
                                    />
                                    <span className={`ml-3 transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                                        {user.name}
                                    </span>
                                </>
                            )
                        )}
                    </li>
                </ul>
            </nav>

            <div className="p-4 border-t border-gray-700">
                <LogoutButton className={`ml-3 transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`} />
            </div>
        </div>
    );
};

export default Sidebar;
