import React, { useEffect } from "react";
import { auth } from "../firebase/config";

import { useAuthState } from "react-firebase-hooks/auth";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    // const setPersistenceSession = () => {
    //   let email = "...";
    //   let password = "...";
    //   auth
    //     .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    //     .then(() => {
    //       return auth.signInWithEmailAndPassword(email, password);
    //     })
    //     .catch((err) => console.error(err));
    // };
    // setPersistenceSession();
    // auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
