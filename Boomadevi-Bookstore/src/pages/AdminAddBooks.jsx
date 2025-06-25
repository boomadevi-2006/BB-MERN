import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bookStorage } from "../data/bookStorage";
import "./AdminAddBooks.css";

const genres = [
  "Fiction", "Romance", "Thriller", "Horror", "Science", "Mystery", "Fantasy",
  "Biography", "History", "Comics", "Adventure", "Children", "Poetry", "Drama",
  "SelfHelp", "Spiritual", "Cookbooks", "ScienceFiction", "Famous"
];

const AdminAddBooks = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    genre: genres[0],
    image: null,
    stock: 1, // ✅ Default stock value
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setBook({ ...book, [name]: URL.createObjectURL(files[0]) });
    } else {
      setBook({ ...book, [name]: name === "stock" ? Number(value) : value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTitle = book.title.trim().toLowerCase();
    const selectedGenre = book.genre;

    const alreadyExistsInGenre = bookStorage[selectedGenre].some(
      (b) => b.title.trim().toLowerCase() === newTitle
    );

    if (alreadyExistsInGenre) {
      alert(`⚠️ Book already exists in ${selectedGenre}!`);
      return;
    }

    const newBook = {
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
      stock: book.stock, // ✅ Include stock
    };

    bookStorage[selectedGenre].push(newBook);

    alert(`✅ Book added to ${selectedGenre} successfully!`);

    // Reset form
    setBook({
      title: "",
      author: "",
      price: "",
      genre: genres[0],
      image: null,
      stock: 1,
    });
  };

  return (
    <div className="admin-add-book-container">
      <h2>Add New Book</h2>
      <form className="admin-book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          name="title"
          value={book.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={book.author}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={book.price}
          onChange={handleChange}
          required
        />
        <select name="genre" value={book.genre} onChange={handleChange}>
          {genres.map((g, i) => (
            <option key={i} value={g}>{g}</option>
          ))}
        </select>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={book.stock}
          onChange={handleChange}
          required
          min="1"
        />
        <button type="submit">Add Book</button>
      </form>

      {book.image && (
        <div className="book-preview">
          <h4>Preview</h4>
          <img src={book.image} alt="Book" />
          <p><strong>{book.title}</strong> by {book.author}</p>
        </div>
      )}
    </div>
  );
};

export default AdminAddBooks;
