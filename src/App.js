import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListaInmuebles from "./components/ImmovablesList";
import ImmovablesContext from "./components/ImmovablesContext";
import { Filters } from "./components/Filters";

//O contexto estaba inicialmente en ImmovablesList.js pero é boa idea traelo para poder compartir o contexto con Filters.js
function App() {
  const [filter, setFilter] = useState({
    rooms: "",
    baths: "",
    parks: "",
    types: "",
  });

  return (
    <div className="container border bg-light">
      <ul class="nav d-flex justify-content-center mb-1">
        <li>
          <h3>Todo a 100€</h3>
        </li>
      </ul>
      <ImmovablesContext.Provider value={filter}>
        <Filters setFilter={setFilter} />
        <header className="App-header">
          <ListaInmuebles />
        </header>
      </ImmovablesContext.Provider>
    </div>
  );
}

export default App;
