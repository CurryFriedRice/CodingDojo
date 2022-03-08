import React, { Component } from "react";
import styles from './Main.module.css';

class SubContents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className={styles.subContents}>
          <div id="SubContents">SubContents</div>
      </fieldset>
    );
  }
}

export default SubContents;
