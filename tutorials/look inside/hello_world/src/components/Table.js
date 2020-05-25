import React from "react";
import Collumns from "./Collumns";
function Table() {
  return (
    <table>
      <th>Table Component</th>
      <tbody>
        <tr>
          <Collumns />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
