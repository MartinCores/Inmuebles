import React, { useContext } from "react";
import ImmovablesContext from "./ImmovablesContext";

export const Filters = (props) => {
  const filterContext = useContext(ImmovablesContext);

  const changeRoom = (event) => {
    props.setFilter({ ...filterContext, rooms: event.target.value }); //spread operator para quedarme cos valores anteriores no estado filter, e modificar só rooms
  };
  const changeBath = (event) => {
    props.setFilter({ ...filterContext, baths: event.target.value });
  };
  const changePark = (event) => {
    props.setFilter({
      ...filterContext,
      parks: event.target.value,
    });
  };
  const changeType = (event) => {
    props.setFilter({
      ...filterContext,
      types: event.target.value,
    });
  };

  return (
    <ul class="nav d-flex pb-4 mb-3 bg-dark rounded">
      <li className="col-3 mt-1">
        <label className="mr-2 mt-2 text-white">Nº Cuartos:</label>
        <select className="form-control" onChange={changeRoom}>
          <option></option>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </li>
      <li className="col-3 mt-1">
        <label className="mr-2 mt-2 text-white">Nº Baños: </label>
        <select className="form-control" onChange={changeBath}>
          <option></option>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </li>
      <li className="col-3 mt-1">
        <label className="mr-2 mt-2 text-white">Nº Parkings: </label>
        <select className="form-control" onChange={changePark}>
          <option></option>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </li>
      <li className="col-3 mt-1">
        <label className="mt-2 text-white">Tipo: </label>
        <select className="form-control" onChange={changeType}>
          <option></option>
          <option>Oficina</option>
          <option>Condominio horizontal</option>
          <option>Terreno</option>
          <option>Departamento</option>
          <option>Casa</option>
        </select>
      </li>
    </ul>
  );
};
