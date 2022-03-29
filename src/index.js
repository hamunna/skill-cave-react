import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import PrivateRoute from "./hooks/Private/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                {/* <PrivateRoute> */}
                    <Route path="/" element={<App />} />
                    <Route path="/home" element={<Home />} />
                {/* </PrivateRoute> */}
                <Route path="/signIn" element={<SignIn />} />

                {/* <Route path="/private">
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <App />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                </Route> */}
            </Routes>
        </AuthProvider>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
