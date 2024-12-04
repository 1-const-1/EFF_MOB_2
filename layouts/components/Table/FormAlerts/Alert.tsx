import * as React from "react";
import {GoCheckCircle, GoAlertFill} from "react-icons/go";
import {solveProblem } from "../../fetch";

import "./Alert.sass";


const Alert = (props:{
  userId : number, 
  problem : boolean, 
  hidden : boolean, 
  setterHidden : any,
  setterProblems : any,
  setterTrouble : any,
}) => {
  const fine = "Ugh... No problem noticed.";
  const notFine = "Yeah. I got you. We have a problem here.";

  return (
  <div className="alert-wnd" hidden={props.hidden}>
    <div>
      <div>{!props.problem ? <GoCheckCircle /> : <GoAlertFill />}</div>
      <p>{!props.problem ? fine : notFine}</p>
    </div>
    <div>
      {(()=> {
        if (props.problem)
          return <button onClick={async () => {
            try {
              const res = await solveProblem(props.userId);
              if (!res)
                throw new Error("Response value is empty.");

              props.setterProblems(false);
              props.setterTrouble(res.troubles);
              
            } catch (err) {
              console.log(err);
              throw err;
            }
          }}>
            <div>Solve problem now</div>
            <span>this sends a signal to the endpoint</span>
          </button>;
      })()}
      <button onClick={() => props.setterHidden(true)}>Close</button>
    </div>
  </div>
  );
}

export default Alert;