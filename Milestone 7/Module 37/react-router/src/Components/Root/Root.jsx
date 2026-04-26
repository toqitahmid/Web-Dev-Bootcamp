import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div style={{ display: "flex", gap: "250px", margin: "50px" }}>
        <div>
          <Aside></Aside>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
