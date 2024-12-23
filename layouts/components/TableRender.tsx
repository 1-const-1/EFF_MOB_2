import * as React from "react";
import Tabel from "./Table/Table";
import { getPage } from "./fetch";

import "./TableRender.sass";

/**
 * This container renders the structure to manage the list of users.
 * Aka implementation of a dashboard.
 * @returns 
 */
const TableRender = () => {

  const [maxLength, setMaxLength] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const [troubles, setTroubles] = React.useState(0);
  const [tblData, setTblData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {

        const res = await getPage(1, 50);

        setMaxLength(res.len);
        setTroubles(res.troubles);
        setTblData(res.data);

      } catch (err) {
        console.log(err);
        throw err;
      }

    })();
  }, []);

  return (
    <div className="tbl-render">
      <div className="user-counter">
        <p>Users with troubles:</p>
        <p>{troubles}</p>
      </div>
      <div>{tblData.length 
              ? <Tabel 
                  data={tblData} 
                  setterTrouble={setTroubles}/> 
              : "No data"}</div>
      <div>
        <form 
          className="tbl-form"
          onSubmit={(e) => e.preventDefault()}>
          <div>
            <input 
              onChange={(e) => setLastPage(Number(e.target.value))} 
              type="text" 
              placeholder="Page 1"/>
            <div>max: {maxLength}</div>
          </div>
          <div>
            <button onClick={async () => {
              setTblData((await getPage(lastPage, 50)).data);
            }}>Load</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TableRender;