import React, { Component } from "react";
import styles from './Main.module.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset class={styles.header}>
          <div id="Header">
              <p>Header</p>
          </div>
      </fieldset>
    );
  }
}

export default Header;
