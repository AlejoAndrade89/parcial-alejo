import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

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
        <IconButton
          aria-label="volver"
          sx={{
            marginBottom: 2,
            bgcolor: "#f1f1f1",
            color: "#333",
            fontSize: 32,
            "&:hover": {
              bgcolor: "crimson",
            },
          }}
          onClick={() => window.history.back()}
        >
          <ArrowBack />
        </IconButton>

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
        <Link to="contacto">
          <h1>Contact Us</h1>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
