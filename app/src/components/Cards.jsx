import React from "react";
import style from "./Cards.module.css";
import { BASE_URL } from "../App";

const Cards = (props) => {
  return (
    <>
      <div className={style.cards}>
        <div className={style.img} style={{ cursor: "pointer" }}>
          <img src={BASE_URL + props.image} alt="food-img"></img>
        </div>
        <div className={style.txt}>
          <h3 style={{ fontSize: 18 }}>{props.name}</h3>
          <span style={{ fontSize: 13 }}>{props.text}</span>
          <div className="price">
            <button className={style.price_btn}>${props.price}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
