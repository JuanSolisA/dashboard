import React from "react";

const Table = (props) => (
  <table className="table">
    <thead>
      <th>Titulo</th>
      <th>Duración</th>
      <th>Rating</th>
      <th>Género</th>
      <th>Premios</th>
    </thead>
    {props.children}
  </table>
);

export default Table;
