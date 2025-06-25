import React, { useEffect, useState } from "react";
import "./Cart.css";
import { bookStorage } from "../data/bookStorage";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);

  // Show toast
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const getBookData = (title) => {
    for (const genre in bookStorage) {
      const book = bookStorage[genre].find(b => b.title === title);
      if (book) return { book, genre };
    }
    return {};
  };

  useEffect(() => {
    const rawCart = JSON.parse(localStorage.getItem("cart")) || [];

    const cleanedCart = rawCart.filter(item => {
      const { book } = getBookData(item.title);
      return book && book.stock > 0;
    });

    setCart(cleanedCart);
    localStorage.setItem("cart", JSON.stringify(cleanedCart));
  }, []);

  const updateQuantity = (index, delta) => {
    const updatedCart = [...cart];
    const item = updatedCart[index];
    const { book } = getBookData(item.title);

    if (!book) return;

    const newQty = item.quantity + delta;

    if (newQty > book.stock) {
      showToast("❌ Not enough stock.", "error");
      return;
    }

    if (newQty <= 0) {
      updatedCart.splice(index, 1);
    } else {
      updatedCart[index].quantity = newQty;
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleBuySingle = (index) => {
    const item = cart[index];
    const { book } = getBookData(item.title);

    if (!book) return;

    if (book.stock >= item.quantity) {
      book.stock -= item.quantity;
      showToast(`✅ Purchased "${item.title}" (${item.quantity})`);
      const updatedCart = cart.filter((_, i) => i !== index);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      showToast(`❌ Not enough stock for "${item.title}". Available: ${book.stock}`, "error");
    }
  };

  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    showToast("❌ Item removed.");
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    showToast("🗑️ Cart cleared.");
  };

  const handleBuyAll = () => {
    const newCart = [];

    cart.forEach(item => {
      const { book } = getBookData(item.title);

      if (!book) return;

      if (book.stock >= item.quantity) {
        book.stock -= item.quantity;
        showToast(`✅ Purchased "${item.title}" (${item.quantity})`);
      } else {
        showToast(`❌ Not enough stock for "${item.title}". Available: ${book.stock}`, "error");
        newCart.push(item);
      }
    });

    const updatedCart = newCart.filter(item => {
      const { book } = getBookData(item.title);
      return book && book.stock > 0;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const grandTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}

      {cart.length === 0 ? (
        <p>Your cart is empty or items are out of stock.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, i) => {
              const { book } = getBookData(item.title);
              const total = item.price * item.quantity;

              return (
                <div key={i} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>Author: {item.author}</p>
                    <p>Price: ₹{item.price}</p>
                    <p>Stock Left: {book?.stock ?? 0}</p>
                    <p><strong>Total: ₹{total}</strong></p>

                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(i, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(i, 1)}>+</button>
                    </div>

                    <div className="cart-buttons">
                      <button className="buy-button" onClick={() => handleBuySingle(i)}>Buy Now</button>
                      <button className="remove-button" onClick={() => handleRemove(i)}>Remove</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="summary-section">
            <h3>Grand Total: ₹{grandTotal}</h3>
            <button className="buy-button" onClick={handleBuyAll}>Buy All</button>
            <button className="clear-button" onClick={handleClearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
