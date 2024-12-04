import * as React from "react";
import {GoCheckCircle, GoAlertFill} from "react-icons/go";
import { getProblemUsers } from "../../fetch";

import "./Alert.sass";

const solveProblem = async (userId : number) => {
  try {

    const res = await fetch("/solve", {
      method: "POST",
      headers: {
        "content-type" : "application/json",
      },
      body: JSON.stringify({id : userId}),
    });

    if (!res.ok)
      throw new Error(`HTTP response status: ${res.status}`);

    return res.json();

  } catch (err) {
    console.log(err);
    throw err;
  }
}

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

              const res1 = await solveProblem(props.userId);
              if (!res1)
                throw new Error("Response value is empty.");

              props.setterProblems(false);

              const res2 = await getProblemUsers();
              if (!res2)
                throw new Error("Response value is empty.");

              props.setterTrouble(res2.troubles);
              
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