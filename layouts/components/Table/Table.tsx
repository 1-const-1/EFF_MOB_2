import * as React from "react";
import TableHeader from "./Header";
import TableBody from "./Body";

export interface TableIndex {
  id : number,
  name : string,
  surname : string,
  age : number,
  gender : string,
  problem : boolean,
}

const Tabel = (props: {
  data: Array<TableIndex>,
  setterTrouble : any,
}) => {
  return (
    <table>
      <TableHeader val={props.data[0]}/>
      <TableBody 
        data={props.data}
        setterTrouble={props.setterTrouble}
        />
    </table>
  );
}

export default Tabel;