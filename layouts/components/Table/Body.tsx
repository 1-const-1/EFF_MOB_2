import * as React from "react";
import * as ReactDOM from "react-dom";
import { TableIndex } from "./Table";
import {GoCheckCircle, GoAlertFill} from "react-icons/go";
import {BsGenderFemale, BsGenderMale} from "react-icons/bs";
import Alert from "./FormAlerts/Alert";

/**
 * This element contains all necessary info about users.
 * Shortly: The list of users.
 * @param props 
 * @returns 
 */
const TableBody = (props:{
  data : Array<TableIndex>,
  setterTrouble : any,
}) => {

  const [userId, setUserId] = React.useState(0);
  const [problem, setProblem] = React.useState(false);
  const [hidden, setHidden] = React.useState(true)

  return (
  <>
    <div className="tbl-body">{props.data.map( (v, idx) => {
      return <div key={idx} className={`${!v.problem ? "" : "problem-user"}`} onClick={() => {
        setUserId(v.id);
        setProblem(v.problem);
        setHidden(false);
      }}>
        <div>{v.id}</div>
        <div className="tbl-user-info">
          <div>Name: {v.name} {v.surname}</div>
          <div>Gender: {v.gender} {v.gender === "Male" ? <BsGenderMale/> : <BsGenderFemale />}</div>
          <div>Age: {v.age}</div>
          <div hidden={!v.problem ? true : false}>Click to check the problem</div>
        </div>
        <div className="tbl-alert-icon">
          {!v.problem ? <GoCheckCircle /> : <GoAlertFill /> }
        </div>
      </div>;
    })}</div>
    {ReactDOM.createPortal(
      <Alert 
        userId={userId} 
        problem={problem} 
        hidden={hidden} 
        setterHidden={setHidden}
        setterProblems={setProblem}
        setterTrouble={props.setterTrouble}
        />, 
      document.body
    )}
  </>
  );
}

export default TableBody;