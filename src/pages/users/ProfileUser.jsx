import React from "react";
import { useSelector } from "react-redux";
import imageDefaultUser from "../../assets/images/image-1.avif";
import { FaCamera } from "react-icons/fa";
import { useUpdateProfileUserMutation } from "../../features/auth/authAPI";
import { useOutletContext } from "react-router-dom";

const ProfileUser = () => {
  const user = useSelector((state) => state.auth.user);
  const [update, { isLoading }] = useUpdateProfileUserMutation();
  const { isColorChanged } = useOutletContext();

  return (
    <div
      className={`mx-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl shadow-2xl border ${
        isColorChanged ? "border-pink-500" : "border-green-500"
      } text-white font-mono`}
    >
      {/* Profile Picture Section */}
      <div className="flex max-sm:flex-col max-sm:text-center items-center gap-6">
        <div className="relative">
          <img
            src={
              user?.avatar
                ? `http://127.0.0.1:8000${user?.avatar}`
                : imageDefaultUser
            }
            alt="Profile"
            className={`w-28 h-28 rounded-full object-cover border-4 ${
              isColorChanged
                ? "border-pink-500 drop-shadow-neon"
                : "border-green-500 drop-shadow-neonGreen"
            }`}
          />
          <div
            className={`absolute bottom-0 right-0 ${
              isColorChanged ? "bg-pink-500" : "bg-green-500"
            } p-2 rounded-full cursor-pointer hover:bg-pink-500 transition`}
          >
            <label htmlFor="profileImageInput" className="cursor-pointer">
              <FaCamera color="white" />
            </label>
            <input type="file" id="profileImageInput" className="hidden" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-wide">
            {user?.username || "Nom d'utilisateur"}
          </h2>
          <p className="text-sm text-gray-400">
            {user?.email || "Email non défini"}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className={`relative flex h-3 w-3`}>
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  user?.is_online ? "bg-green-400" : "bg-red-400"
                } opacity-75`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${
                  user?.is_online ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </span>
            <span className="text-xs">
              {user?.is_online ? "En ligne" : "Hors ligne"}
            </span>
          </div>
        </div>
      </div>

      {/* Informations Section */}
      <div className="mt-8">
        <h3
          className={`text-2xl font-semibold mb-6 border-b ${
            isColorChanged
              ? "text-pink-500 border-pink-500"
              : "text-green-500 border-green-500"
          } pb-2`}
        >
          Informations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoItem
            isColorChanged={isColorChanged}
            label="Nom d'utilisateur"
            value={user?.username}
          />
          <InfoItem
            isColorChanged={isColorChanged}
            label="Pseudo"
            value={user?.pseudo}
          />
          <InfoItem
            isColorChanged={isColorChanged}
            label="Genre"
            value={user?.gender}
          />
          <InfoItem
            isColorChanged={isColorChanged}
            label="Téléphone"
            value={user?.phone}
          />
          <InfoItem
            isColorChanged={isColorChanged}
            label="Pays"
            value={user?.pays}
          />
          <InfoItem
            isColorChanged={isColorChanged}
            label="Bio"
            value={user?.bio}
          />
          <InfoItem
            isColorChanged={isColorChanged}
            label="Date de naissance"
            value={user?.birthday}
          />
          <InfoItem
            isColorChanged={isColorChanged}
            label="Role"
            value={user?.role}
          />
        </div>
      </div>
    </div>
  );
};

// Sous-composant pour infos stylé
const InfoItem = ({ label, value, isColorChanged }) => (
  <div
    className={`bg-gray-800 p-4 rounded-lg border border-gray-700 ${
      isColorChanged ? "hover:border-pink-500" : "hover:border-green-500"
    } transition`}
  >
    <p className="text-xs text-gray-400 mb-1">{label}</p>
    <p className="text-base font-medium text-white">{value || "Non défini"}</p>
  </div>
);

export default ProfileUser;
