import React, { Component } from "react";
import Auxiliary from '../../../hoc/Auxiliary';
import WithClass from '../../../hoc/WithClass';
import classes from "./Person.css";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props){
    super(props);
    this.inputElement = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElement.current.focus();
  }
  render() {
    console.log("[Person.js] rendered");
    return (
      <Auxiliary>
          {this.context.authenticated ? <p>Authenticated</p> : <p>Please Login!</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => { this.inputElement = inputEl }}
          ref={this.inputElement}
          onChange={this.props.changed}
          value={this.props.name} />
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default WithClass(Person, classes.Person);
