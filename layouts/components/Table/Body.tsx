import * as React from "react";
import * as ReactDOM from "react-dom";
import { TableIndex } from "./Table";
import {GoCheckCircle, GoAlertFill} from "react-icons/go";
import {BsGenderFemale, BsGenderMale} from "react-icons/bs";
import Alert from "./FormAlerts/Alert";

const TableBody = (props:{
  data : Array<TableIndex>,
  setterTrouble : any,
}) => {

  const [userId, setUserId] = React.useState(0);
  const [problem, setProblem] = React.useState(false);
  const [hidden, setHidden] = React.useState(true)

  return (
  <>
    <tbody>{props.data.map( (v, idx) => {
      return <tr key={idx} onClick={() => {
        setUserId(v.id);
        setProblem(v.problem);
        setHidden(false);
      }}>
        <td>{v.id}</td>
        <td>
          <div>Name: {v.name} {v.surname}</div>
          <div>Gender: {v.gender} {v.gender === "Male" ? <BsGenderMale/> : <BsGenderFemale />}</div>
          <div>Age: {v.age}</div>
          <div hidden={!v.problem ? true : false}>Click to check the problem</div>
        </td>
        <td>
          {!v.problem ? <GoCheckCircle /> : <GoAlertFill /> }
        </td>
      </tr>;
    })}</tbody>
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