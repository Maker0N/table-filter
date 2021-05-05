import React from "react";

const RowData = ({ row: {id, date, title, quant, distance} }) => {
  return (
    <tr key={id}>
      <td>{date}</td>
      <td>{title}</td>
      <td>{quant}</td>
      <td>{distance}</td>
    </tr>
  );
};

export default RowData;
