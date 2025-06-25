import React, { useState, useEffect } from 'react';
import { bookStorage } from '../../data/bookStorage';
import BookCard from '../../components/BookCard';
import '../../pages/GenrePage.css';

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  const loadBooks = () => {
    const all = [];
    const seen = new Set();

    Object.entries(bookStorage).forEach(([genre, bookList]) => {
      bookList.forEach((book) => {
        if (!seen.has(book.title) && book.stock > 0) {
          seen.add(book.title);
          all.push({ ...book, genre });
        }
      });
    });

    setBooks(all);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="genre-page">
      <h2>All Books</h2>
      <div className="book-list">
        {books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          books.map((book, index) => (
            <BookCard
              key={index}
              {...book}
              showButtons={false} // ❌ Hide cart and buy buttons
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllBooks;
