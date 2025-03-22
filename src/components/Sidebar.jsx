import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faBars,
  faFile,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user?.role === "admin";

  return (
    <div
      className={`fixed left-0 h-full bg-neutral-900 text-white transition-all duration-300 shadow-lg ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header avec pseudo */}
      <div className="relative w-full p-4 border-b border-gray-700 flex items-baseline justify-between">
        {isOpen && (
          <div>
            <span className="flex text-xl font-extrabold drop-shadow-neonWhite max-sm:text-sm tracking-wide uppercase">
              {user?.pseudo}
            </span>
            <span className="text-gray-500 text-[12px]">Pseudo</span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? "" : "m-auto"
          } text-pink-500 hover:text-pink-400 transition`}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {[
            {
              to: isAdmin ? "/dashboard-admin" : "/dashboard-user",
              icon: isAdmin ? faHome : faGamepad,
              label: isAdmin ? "Dashboard" : "Gaming Posts",
            },
            { to: "/profil-user", icon: faUser, label: "Profil" },
            { to: "/mes-article", icon: faFile, label: "Mes articles" },
            { to: "/parametre", icon: faCog, label: "Paramètres" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center ${
                    isOpen ? "" : "justify-center"
                  } p-3 rounded-md font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-pink-500 text-white shadow-lg"
                      : "hover:bg-black hover:text-pink-500"
                  }`
                }
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  size="lg"
                  className="transition-transform hover:scale-110 drop-shadow-[0_0_6px_#ec4899]"
                />
                <span
                  className={`ml-3 transition-all duration-200 ${
                    isOpen ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  {item.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <LogoutButton
          className={`ml-3 transition-all duration-200 ${
            isOpen ? "opacity-100" : "opacity-0 hidden"
          } text-pink-500 hover:text-white`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
