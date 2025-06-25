import React from 'react';
import './BookCard.css';

const BookCard = ({
  title,
  author,
  price,
  image,
  stock,
  addToCart,
  buyNow,
  showButtons = true // default: show buttons
}) => {
  if (stock <= 0) return null;

  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-image" />
      <h4 className="book-title">{title}</h4>
      <p className="book-author">by {author}</p>
      <p className="book-stock">Stock: {stock}</p>

      {/* Only show price if buttons are visible */}
      {showButtons && <p className="book-price">₹{price}</p>}

      {showButtons && (
        <div className="book-buttons">
          <button className="cart-btn" onClick={() => addToCart({ title, author, price, image, stock })}>
            Add to Cart
          </button>
          <button className="buy-btn" onClick={() => buyNow({ title, author, price, image, stock })}>
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
