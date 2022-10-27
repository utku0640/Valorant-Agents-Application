import styles from "../styles/AgentsCard.module.css";
import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useGlobalContext } from "../context";

function ChampItem({ uuid, displayName, description, displayIcon }) {
  const { removeItem } = useGlobalContext();
  return (
    <div className={styles.agentsCard}>
      <div className={styles.agentsHeading}>
        <img src={displayIcon} />
        <h1>{displayName}</h1>
        <p>{description}</p>
        <div>
          {/* {abilities.map((ability, idx) => (
            <p> {ability.displayName}</p>
          ))} */}
        </div>
      </div>
      <button className={styles.btn} onClick={() => removeItem(uuid)}>
        <VscChromeClose />
      </button>
    </div>
  );
}

export default ChampItem;
