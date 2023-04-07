import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext/DataContext";

const FavoritesContainer = () => {
  const { state } = useContext(DataContext);

  return (
    <div>
      <h1>Su listado de Favoritos</h1>
      {state.favs.map((e) => (
        <h1 key={e.id}>{e.name}</h1>
      ))}
    </div>
  );
};

export default FavoritesContainer;
