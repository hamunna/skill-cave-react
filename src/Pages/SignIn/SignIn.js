import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const SignIn = () => {

    const { signInWithGoogle } = useFirebase();

    const navigate = useNavigate("/");

    // Google SignIn Handle
    const handleGoogleSignIn = () => {
        signInWithGoogle(navigate);
    };

    return (
        <div className="text-center" style={{ margin: "200px auto" }}>
            <h1 className="text-center fw-bold theme-secondary-text border-bottom pb-2 mb-2 text-uppercase">
                sign In
            </h1>

            <Button
                style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "#fff",
                }}
                onClick={handleGoogleSignIn}
            >
                <img
                    style={{ width: "300px" }}
                    src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
                    alt=""
                />
            </Button>
        </div>

        // <h1>Hello SignIn Page</h1>
    );
};

export default SignIn;
