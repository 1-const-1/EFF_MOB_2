import * as React from "react";
import { TableIndex } from "./Table";

const TableHeader = (props: {val : TableIndex}) => {
  return (
    <thead>
      <tr>{Object.keys(props.val).map( (v, idx)=> {
        switch (v) {
          case "id":
          case "problem":
            return <th key={idx}>{v}</th>;
          case "name":
            return <th key={idx}>Info</th>
          default:
            return;
        }
      })}</tr>
    </thead>
  );
}

export default TableHeader;