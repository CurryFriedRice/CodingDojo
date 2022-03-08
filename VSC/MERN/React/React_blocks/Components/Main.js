import React, { Component } from "react";
import styles from './Main.module.css';


class Main extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <fieldset className={styles.main}>
        <p>Main</p>
        <div className="d-flex">
        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]}
        </div>
        {this.props.children[3]}
      </fieldset>
    );
  }
}

export default Main;
