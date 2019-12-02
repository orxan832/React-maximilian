import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  const btnToggleRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] rendered");
    btnToggleRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup works useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2rendered");
    return () => {
      console.log("[Cockpit.js] cleanup 2works useEffect");
    };
  });
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={btnToggleRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
        {<button onClick={authContext.login}>Log in</button>}
    </div>
  );
};

export default React.memo(Cockpit);
