// src/components/Card.js
import React from 'react';
import './App.css'


const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <h3 className="card-title">{product.title}</h3>
      <p className="card-price">${product.price}</p>
      <button className="card-button">Add to Cart</button>
    </div>
  );
};

export default Card;
