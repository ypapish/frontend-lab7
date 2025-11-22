import React from "react";
import "./GoodsCard.css";

const GoodsCard = ({ image, name, price }) => {
  return (
    <div className="goods-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Cost: {price} grn</p>
    </div>
  );
};

export default GoodsCard;
