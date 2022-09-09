import React, { useContext } from "react";
import { AuthContext } from "../auth/Auth";
import Navigation from "./Navigation";
import UserNavigation from "./UserNavigation";

const NavMenu = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <UserNavigation />;
  } else {
    return <Navigation />;
  }
};

export default NavMenu;
