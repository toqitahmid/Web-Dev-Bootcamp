import React from 'react';
import "./Header.css"
import { NavLink } from "react-router";

const Header = () => {
    return (
      <div>
        <p>This is Header</p>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/user">User</NavLink>
          <NavLink to="/user2">User2</NavLink>
          <NavLink to="/mobiles">Mobiles</NavLink>
          <NavLink to="/tablets">Tablets</NavLink>
          <NavLink to="/desktops">Desktops</NavLink>
        </nav>
      </div>
    );
};

export default Header;