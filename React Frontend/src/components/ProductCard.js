import React from 'react';

const ProductCard = ({ product, onAddToCart, isLoggedIn }) => {
  const { id, name, description, price } = product;

  return (
    <div className="product col-md-3">
      <div className="title">{name}</div>
      <div className="description">{description}</div>
      <div className="price">Price: ₹ {price}/-</div>
      {isLoggedIn ? (
        <button
          onClick={() => onAddToCart(product)}
          className="btn btn-sm btn-success btn-add-to-cart"
        >
          Add to cart
        </button>
      ) : (
        <div>Please log in to add to cart</div>
      )}
    </div>
  );
};

export default ProductCard;
