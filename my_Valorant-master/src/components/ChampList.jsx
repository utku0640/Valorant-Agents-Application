import { useGlobalContext } from "../context";
import ChampItem from "./ChampItem";
import styles from "../styles/AgentList.module.css";
import React from "react";

function ChampList() {
  const { champCard } = useGlobalContext();
  console.log(champCard);
  return (
    <div>
      <div className={styles.agentList}>
        {champCard.map((item, index) => {
          return <ChampItem {...item} key={item} />;
        })}
      </div>
    </div>
  );
}

export default ChampList;
