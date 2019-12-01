import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[Persons.js] shouldComponentUpdate");
//     if (nextProps !== this.props.persons) {
//       return false;
//     } else {
//       return true;
//     }
//     //burda her props-u ayrica yoxmalaliyiq.
//   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Update message" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }
  render() {
    console.log("[Persons.js] rendered");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
