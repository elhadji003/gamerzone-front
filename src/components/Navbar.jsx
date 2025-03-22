import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="bg-neutral-900 opacity-100 text-white p-4 shadow-md fixed-top transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Titre */}
        <NavLink to="/" className="text-xl font-bold flex items-center">
          <span className="text-xl font-bold max-sm:text-sm">
            <span className="drop-shadow-neonWhite">Gaming~</span>
            <span className="animate-pulse text-pink-500 drop-shadow-neon">
              Zone
            </span>
          </span>
        </NavLink>

        {/* Menu burger pour mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Liens de navigation */}
        <ul className={`md:flex space-x-6 hidden items-center`}>
          <li>{user?.username}</li>
          <li>
            {user?.avatar ? (
              <img
                src={`http://127.0.0.1:8000${user?.avatar}`}
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
            ) : (
              <img
                src="/default-avatar.png" // Une image par défaut si l'utilisateur n'a pas d'avatar
                alt="Default Avatar"
                className="w-10 h-10 bg-white rounded-full object-cover border-2 border-white"
              />
            )}
          </li>
        </ul>
      </div>

      {/* Menu déroulant pour mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 p-4 rounded-md">
          <ul className="space-y-4">
            <li>
              <NavLink to="/" className="hover:text-gray-400 flex items-center">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className="hover:text-gray-400 flex items-center"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Profil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/parametres"
                className="hover:text-gray-400 flex items-center"
              >
                <FontAwesomeIcon icon={faCog} className="mr-2" />
                Paramètres
              </NavLink>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
