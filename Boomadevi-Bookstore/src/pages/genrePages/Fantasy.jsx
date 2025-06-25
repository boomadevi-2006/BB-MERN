// Template genre page generator (copy & paste for each genre)

import React, { useState, useEffect } from 'react';
import { bookStorage } from '../../data/bookStorage';
import BookCard from '../../components/BookCard';
import '../../pages/GenrePage.css';

const GENRE = 'Fantasy'; // Change this per file: Adventure, Biography, Children, etc.

const GenrePage = () => {
  const [books, setBooks] = useState([]);

  const loadBooks = () => {
    const list = bookStorage[GENRE] || [];
    const filtered = list
      .filter(book => book.stock > 0)
      .map(book => ({ ...book, genre: GENRE }));
    setBooks(filtered);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleAddToCart = (book) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(item => item.title === book.title);
    const currentBook = books.find(b => b.title === book.title);
    const stock = currentBook ? currentBook.stock : 0;

    if (index !== -1) {
      if (cart[index].quantity + 1 > stock) {
        alert("❌ Not enough stock.");
        return;
      }
      cart[index].quantity += 1;
    } else {
      if (stock <= 0) {
        alert("❌ Not enough stock.");
        return;
      }
      cart.push({ ...book, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`✅ "${book.title}" added to cart`);
  };

  const handleBuyNow = (book) => {
    const bookList = bookStorage[GENRE];
    const foundBook = bookList.find(b => b.title === book.title);

    if (foundBook && foundBook.stock > 0) {
      foundBook.stock -= 1;
      alert(`🛒 Purchased "${book.title}"`);
      loadBooks();
    } else {
      alert("❌ Book out of stock.");
    }
  };

  return (
    <div className="genre-page">
      <h2>{GENRE} Books</h2>
      <div className="book-list">
        {books.length === 0 ? (
          <p>No {GENRE} books available.</p>
        ) : (
          books.map((book, index) => (
            <BookCard
              key={index}
              {...book}
              addToCart={handleAddToCart}
              buyNow={handleBuyNow}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GenrePage;
