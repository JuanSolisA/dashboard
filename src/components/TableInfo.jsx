import React from "react";

const TableInfo = (props) => (
  <tbody>
    <td>{props.titulo}</td>
    <td>{props.duracion}</td>
    <td>{props.rating} </td>
    <td>
      {props.genero.map((dat, i) => (
        <li key={dat + i}>{dat}</li>
      ))}
    </td>
    <td>{props.premios}</td>
  </tbody>
);

export default TableInfo;
