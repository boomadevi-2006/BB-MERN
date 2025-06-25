import React from 'react';
import { NavLink } from 'react-router-dom';
import './ShopNavbar.css';

const genres = [
  { name: 'Fiction', path: '/shop/fiction' },
  { name: 'Romance', path: '/shop/romance' },
  { name: 'Thriller', path: '/shop/thriller' },
  { name: 'Horror', path: '/shop/horror' },
  { name: 'Science', path: '/shop/science' },
  { name: 'Mystery', path: '/shop/mystery' },
  { name: 'Fantasy', path: '/shop/fantasy' },
  { name: 'Biography', path: '/shop/biography' },
  { name: 'History', path: '/shop/history' },
  { name: 'Comics', path: '/shop/comics' },
  { name: 'Adventure', path: '/shop/adventure' },
  { name: 'Children', path: '/shop/children' },
  { name: 'Poetry', path: '/shop/poetry' },
  { name: 'Drama', path: '/shop/drama' },
  { name: 'Self Help', path: '/shop/self-help' },
  { name: 'Spiritual', path: '/shop/spiritual' },
  { name: 'Cookbooks', path: '/shop/cookbooks' },
  { name: 'Science Fiction', path: '/shop/science-fiction' }
];

const ShopNavbar = () => {
  return (
    <div className="shop-navbar">
      <NavLink to="/shop" className={({ isActive }) => isActive ? 'shop-link active' : 'shop-link'}>
        All
      </NavLink>
      {genres.map((genre, index) => (
        <NavLink
          key={index}
          to={genre.path}
          className={({ isActive }) => isActive ? 'shop-link active' : 'shop-link'}
        >
          {genre.name}
        </NavLink>
      ))}
    </div>
  );
};

export default ShopNavbar;
