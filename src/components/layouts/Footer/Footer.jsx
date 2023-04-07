import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>Contact Us</h1>
        <img
          style={{
            maxWidth: "100%",
            height: "auto",
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            width: "10vw",
          }}
          src="/public/images/DH.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
