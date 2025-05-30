import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSun } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navbar = ({ onClick, isChangeColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleChangeColor = () => {
    onClick();
  };

  return (
    <nav className="bg-neutral-900 opacity-100 text-white p-4 shadow-md fixed-top transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Title */}
        <NavLink to="/" className="text-xl font-bold flex items-center">
          <span className="text-xl font-bold max-sm:text-sm">
            <span className="drop-shadow-neonWhite">Gaming~</span>
            <span
              className={`animate-pulse${
                isChangeColor
                  ? "text-pink-500 drop-shadow-neon"
                  : "text-green-700 drop-shadow-neonGreen"
              }`}
            >
              Zone
            </span>
          </span>
        </NavLink>

        {/* Menu burger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation links */}
        <ul className={`md:flex space-x-6 hidden items-center`}>
          <li className="hover:rotate-[80deg] transition-transform duration-300">
            <button onClick={handleChangeColor}>
              <FontAwesomeIcon
                icon={faSun}
                className={
                  isChangeColor
                    ? "text-pink-500  hover:text-green-500"
                    : "text-green-500 hover:text-pink-500"
                }
              />
            </button>
          </li>
          <li>
            <span className="font-bold">{user?.username}</span>
          </li>
          <li>
            {user?.avatar ? (
              <img
                src={`http://127.0.0.1:8000${user?.avatar}`}
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
            ) : (
              <img
                src="/default-avatar.png"
                alt="Default Avatar"
                className="w-10 h-10 bg-white rounded-full object-cover border-2 border-white"
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
