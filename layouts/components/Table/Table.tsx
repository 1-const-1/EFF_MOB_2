import * as React from "react";
import TableBody from "./Body";

import "./Table.sass";

export interface TableIndex {
  id : number,
  name : string,
  surname : string,
  age : number,
  gender : string,
  problem : boolean,
}

/**
 * The container for a list.
 * @param props 
 * @returns 
 */
const Tabel = (props: {
  data: Array<TableIndex>,
  setterTrouble : any,
}) => {
  return (
    <div className="tbl-users">
      <TableBody 
        data={props.data}
        setterTrouble={props.setterTrouble}
        />
    </div>
  );
}

export default Tabel;