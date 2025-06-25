import React from "react";
import "./Footer.css";
import { genres } from "../data/genres";

const splitIntoColumns = (arr, numCols) => {
  const columns = Array.from({ length: numCols }, () => []);
  arr.forEach((item, index) => {
    columns[index % numCols].push(item);
  });
  return columns;
};

const Footer = () => {
  const genreColumns = splitIntoColumns(genres, 3); // Split genres into 3 columns

  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* About */}
        <div className="footer-section">
          <h4>About BB</h4>
          <p>Discover an endless world of stories, knowledge, and imagination at BookNest — your trusted destination for books across every genre. Whether you're diving into thrilling mysteries, exploring historical journeys, or nurturing young minds with children's tales, we bring you curated collections to inspire every reader.</p>
        </div>

        {/* Genres */}
        <div className="footer-section">
          <h4>Genres</h4>
          <div className="genre-columns">
            {genreColumns.map((column, colIndex) => (
              <ul key={colIndex}>
                {column.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Service */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>Order Tracking</li>
            <li>Return Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-youtube" /></a>
          </div>
          <p>Email: support@boomadevi-bookstore.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Boomadevi Bookstore. All rights reserved.</p>
      </div>
    </footer>
  );s
};

export default Footer;
