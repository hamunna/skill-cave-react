import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // Google SignIn Process
    const signInWithGoogle = (navigate) => {
        signInWithPopup(auth, googleProvider).then((result) => {
            const user = result.user;

            navigate("/");
            setIsLoading(true)
        });
    };

    // Observe User State Process
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [auth]);

    // SignOut Process
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // window.confirm('Please Confirm Log-Out Request!');
            })
            .catch((error) => {});
    };

    return {
        user,
        signInWithGoogle,
        logOut,
    };
};

export default useFirebase;
