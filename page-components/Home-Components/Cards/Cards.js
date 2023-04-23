import React from "react";
import data from "./Cards.json";
import styles from "../../../styles/Cards.module.scss";
const Cards = () => {
  return (
    <div>
      <div className={styles.dash}></div>
      <h3 className={styles.title}>{data.title}</h3>
      <div className={styles.card}>
        {data?.cardData?.map((card) => {
          return (
            <div>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
