import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // user and loading
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(null);

  //   common auth functionality
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscibe();
  }, [refetch]);

  // update user
  const updateUserInfo = (name, photo) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // login with google
  const provider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // forgot password
  const forgotPassword = (email) => {
    // setLoading(true)
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    createUser,
    loginUser,
    logOut,
    updateUserInfo,
    loginWithGoogle,
    user,
    forgotPassword,
    loading,
    setRefetch,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
