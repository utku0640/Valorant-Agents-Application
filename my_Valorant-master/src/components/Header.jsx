import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>VALORANT</h1>
      <ul>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Agents</a>
        </li>

        <li>
          <a>Army</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
