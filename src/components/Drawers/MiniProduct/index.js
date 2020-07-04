// @format
import React from "react";
import "./styles.css";

const MiniProduct = ({ product }) => {
  const {
    image,
    name,
    regular_price,
    actual_price,
    installments,
    size,
  } = product;

  return (
    <div className="product__list__item ">
      <div className="product__list__row">
        <figure className="product__image">
          <img src={image} alt={name} />
        </figure>
        <div className="product__list__info">
          <p className="product__list__name">{name}</p>
          {size && <p className="product__list__size">{size}</p>}
        </div>
        <div className="product__list__pricing">
          <div className="product__list__current">{actual_price}</div>
          <div className="product__list__installments">{installments}</div>
        </div>
      </div>
    </div>
  );
};

export default MiniProduct;
