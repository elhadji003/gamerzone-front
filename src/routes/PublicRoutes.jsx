import { Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Authentificate from "../pages/auth/Authentificate";


const PublicRoutes = [
    { path: "/", element: Home },
    { path: "/login", element: Authentificate },
];

export default PublicRoutes;
