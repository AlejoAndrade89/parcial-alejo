import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <div className="footer-container">
        <Link to="contacto">
          <h1>Contact Us</h1>
        </Link>
        <IconButton
          className="icon-button"
          aria-label="volver"
          onClick={() => window.history.back()}
        >
          <ArrowBack />
        </IconButton>
        <img className="logo" src="/public/images/DH.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
