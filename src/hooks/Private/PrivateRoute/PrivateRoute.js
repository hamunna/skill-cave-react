import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../../useFirebase";

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useFirebase();
    const location = useLocation();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    return user.email ? (
        children
    ) : (
        <Navigate to="/signIn" state={{ from: location }} />
    );
};

export default PrivateRoute;
