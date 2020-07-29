import React, { useState, useEffect, useContext } from "react";
import getInmuebles from "../api/getInmuebles";
import "bootstrap/dist/css/bootstrap.min.css";
import ImmovablesContext from "./ImmovablesContext";

//O primeiro é darlles un contexto no que poder almacenar os cambios:

const ListaInmuebles = () => {
  const [immovablesConst, setImmovablesConst] = useState([]);
  const [immovables, setImmovables] = useState([]);

  // Traio o contexto dende a APP
  const filter = useContext(ImmovablesContext);

  const checkFilters = (filtro, inmueble) => {
    const checkRooms =
      inmueble.room_amount === parseInt(filtro.rooms) || filtro.rooms === "";
    const checkBaths =
      inmueble.bathroom_amount === parseInt(filtro.baths) ||
      filtro.baths === "";
    const checkParks =
      inmueble.parking_lot_amount === parseInt(filtro.parks) ||
      filtro.parks === "";
    const checkTypes =
      inmueble.type.name === filtro.types || filtro.types === "";

    return checkRooms && checkBaths && checkParks && checkTypes;
  };

  useEffect(() => {
    const filterRooms = immovablesConst.filter((inmueble) => {
      return checkFilters(filter, inmueble);
    });
    setImmovables(filterRooms);
  }, [filter]);

  useEffect(() => {
    const responseFunction = async () => {
      const response = await getInmuebles();
      console.log(response);
      setImmovables(response);
      setImmovablesConst(response);
    };
    responseFunction();
  }, []);

  return (
    <div>
      {immovables.length < 1 ? (
        <p>No se encuentra ningún resultado!</p>
      ) : (
        <table className="table table-dark">
          <thead></thead>
          <tbody>
            {immovables.map((inmueble) => {
              return (
                <tr>
                  <th scope="row">
                    <img src={inmueble.photos} />
                    <p>Cuartos: {inmueble.room_amount}</p>
                    <p>Baños: {inmueble.bathroom_amount}</p>
                    <p>Parking: {inmueble.parking_lot_amount}</p>
                    <p>Tipo: {inmueble.type.name}</p>
                  </th>
                  <td>{inmueble.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaInmuebles;
