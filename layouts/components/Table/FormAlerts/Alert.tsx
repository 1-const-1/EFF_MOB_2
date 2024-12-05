import * as React from "react";
import {GoCheckCircle, GoAlertFill} from "react-icons/go";
import {solveProblem } from "../../fetch";

import "./Alert.sass";

/**
 * This component is a popup. 
 * It allows to send a request to solve the problem
 * @param props 
 * @returns 
 */
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

  const root = document.getElementById("root");

  const styleHidden : React.CSSProperties = {
    width: "0%",
    height: "0%",
  };

  const styleUnhidden : React.CSSProperties = {
    width: "100%",
    height: "100%",
  };

  return (
  <div 
    className="alert-cnt"
    style={props.hidden ? (() => {
      root.style.filter = "none";
      return styleHidden;
    })() : (() => {
      root.style.filter = "blur(4px)";
      return styleUnhidden;
    })()}>
    <div 
      className="alert-wnd" 
      hidden={props.hidden}>
      <div>
        <div>{!props.problem ? <GoCheckCircle /> : <GoAlertFill />}</div>
        <p>{!props.problem ? fine : notFine}</p>
      </div>
      <div>
        {(()=> {
          if (props.problem)
            return <button className="solve-button" onClick={async () => {
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
  </div>
  );
}

export default Alert;