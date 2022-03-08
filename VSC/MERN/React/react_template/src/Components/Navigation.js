import React, { Component } from "react";
import styles from './Main.module.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset class={styles.navigation}>
          <div>Navigation</div>
      </fieldset>
    );
  }
}

export default Navigation;
