import React, { Component } from "react";
import styles from './Main.module.css';

class Advertisement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset  class={styles.advertisement}>
          <div>ADVERTISEMENT</div>
      </fieldset>
    );
  }
}

export default Advertisement;
