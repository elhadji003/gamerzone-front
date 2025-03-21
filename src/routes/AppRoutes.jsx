import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProtectedRoute from '../pages/auth/ProctectedRoute';
import Forbidden from '../pages/Forbidden';
import adminRoutes from './AdminRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                {/* Routes publiques */}
                {PublicRoutes.map(({ path, element: Element }) => (
                    <Route key={path} path={path} element={<Element />} />
                ))}

                {/* Routes privées pour les utilisateurs */}
                {PrivateRoutes.map(({ path, element: Element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <ProtectedRoute requiredRole="user">
                                <Element />
                            </ProtectedRoute>
                        }
                    />
                ))}

                {/* Routes protégées pour les admins */}
                {adminRoutes.map(({ path, element: Element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <Element />
                            </ProtectedRoute>
                        }
                    />
                ))}

                {/* Page 403 interdite */}
                <Route path="/403" element={<Forbidden />} />

                {/* Redirection par défaut */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <ToastContainer />
        </div>
    );
};

export default AppRoutes;