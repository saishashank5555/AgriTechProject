import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <div className="card-body">
        <h4>{product.name}</h4>
        <p className="cat">{product.category}</p>
        <p className="desc">{product.description}</p>
        <div className="card-footer">
          <div className="price">₹{product.price}</div>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
