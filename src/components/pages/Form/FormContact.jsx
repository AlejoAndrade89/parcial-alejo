import React from "react";
import "./FormContact.css";
import { Box, Button, TextField } from "@mui/material";

export const FormContact = ({
  handleSubmit,
  handleEmailChange,
  handleNameChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
        padding: "10px",
        height: "100vh",
      }}
    >
      <h2>Want to Know more ?</h2>
      <br />
      <br />
      <TextField
        label="Nombre"
        variant="outlined"
        margin="normal"
        onChange={handleNameChange}
      />
      <TextField
        label="Correo"
        variant="outlined"
        margin="normal"
        onChange={handleEmailChange}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Enviar
      </Button>
    </Box>
  );
};
