import { useState, useEffect } from 'react';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, } from "firebase/auth";
import initializeAuthentication from '../Components/pages/SignIn/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider)
            .finally(() => { setLoading(false) })
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
        }).catch((error) => {
        }).finally(() => setLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        loading,
        signInUsingGoogle,
        signInUsingGithub,
        logOut
    }
}

export default useFirebase;