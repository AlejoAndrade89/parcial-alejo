import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://media.tenor.com/cl6kpm_sXggAAAAd/heart-dentist.gif)",
        backgroundSize: "cover",
        minHeight: "80vh",
      }}
    >
      <Link to="dentistas">Lista de Profesionales</Link>
    </div>
  );
};
