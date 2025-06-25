import React from "react";
import { useParams } from "react-router-dom";
import { bookStorage } from "../data/bookStorage";
import BookCard from "../components/BookCard";
import "./GenrePage.css"; // Optional for styling

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const GenrePage = () => {
  const { genreName } = useParams();
  const genreKey = capitalize(genreName);
  const books = bookStorage[genreKey] || [];

  return (
    <div className="genre-books-container">
      <h2>{genreKey} Books</h2>
      <div className="books-grid">
        {books.length === 0 ? (
          <p>No books available in this genre yet.</p>
        ) : (
          books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))
        )}
      </div>
    </div>
  );
};

export default GenrePage;