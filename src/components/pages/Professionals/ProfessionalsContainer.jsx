import axios from "axios";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataContext/DataContext";
import Professionals from "./Professionals";

const ProfessionalsContainer = () => {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    const getProfesionals = axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    getProfesionals
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  console.log(state.users);

  return (
    <div>
      <h2>Aca van los profesionales</h2>
      <Professionals
        users={state.users}
        dispatch={dispatch}
        favs={state.favs}
      />
    </div>
  );
};

export default ProfessionalsContainer;