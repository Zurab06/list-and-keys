import React from "react";
import Button from "./Button";
const Card = (props) => {
    console.log(props)
  return (
    <li className="card">
      <div className="card-image">
        <img src={props.image} />
      </div>
      <div className="card-info">
        <div className="card-name">{props.name}</div>
        <div className="card-price">{props.price} ₽</div>
      </div>
      <Button left = {props.left}/>
    </li>
  );
};

export default Card;
