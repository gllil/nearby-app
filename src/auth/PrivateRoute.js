import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoutes = () => {
  const { user, loading, error } = useContext(AuthContext);
  if (user) {
    return <Outlet />;
  }
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return <Navigate to="/" replace={true} />;
  }
};

export default PrivateRoutes;
