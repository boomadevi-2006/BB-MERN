import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeaderWithVideo from './components/HeaderWithVideo';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminAddBooks from './pages/AdminAddBooks';
import AdminLogin from './pages/AdminLogin';
import GenrePage from "./pages/GenrePage";

// Genre pages
import AllBooks from './pages/genrePages/AllBooks';
import Fiction from './pages/genrePages/Fiction';
import Romance from './pages/genrePages/Romance';
import Thriller from './pages/genrePages/Thriller';
import Horror from './pages/genrePages/Horror';
import Science from './pages/genrePages/Science';
import Mystery from './pages/genrePages/Mystery';
import Fantasy from './pages/genrePages/Fantasy';
import Biography from './pages/genrePages/Biography';
import History from './pages/genrePages/History';
import Comics from './pages/genrePages/Comics';
import Adventure from './pages/genrePages/Adventure';
import Children from './pages/genrePages/Children';
import Poetry from './pages/genrePages/Poetry';
import Drama from './pages/genrePages/Drama';
import SelfHelp from './pages/genrePages/SelfHelp';
import Spiritual from './pages/genrePages/Spiritual';
import Cookbooks from './pages/genrePages/Cookbooks';
import ScienceFiction from './pages/genrePages/ScienceFiction';

function App() {
  // 🛒 Cart state and functions
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  const removeFromCart = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  return (
    <>
      <HeaderWithVideo />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/add-book" element={<AdminAddBooks />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/shop" element={<Shop addToCart={addToCart} />}>
          <Route index element={<AllBooks addToCart={addToCart} />} />
          <Route path=":genreName" element={<GenrePage addToCart={addToCart} />} />
          <Route path="fiction" element={<Fiction addToCart={addToCart} />} />
          <Route path="romance" element={<Romance addToCart={addToCart} />} />
          <Route path="thriller" element={<Thriller addToCart={addToCart} />} />
          <Route path="horror" element={<Horror addToCart={addToCart} />} />
          <Route path="science" element={<Science addToCart={addToCart} />} />
          <Route path="mystery" element={<Mystery addToCart={addToCart} />} />
          <Route path="fantasy" element={<Fantasy addToCart={addToCart} />} />
          <Route path="biography" element={<Biography addToCart={addToCart} />} />
          <Route path="history" element={<History addToCart={addToCart} />} />
          <Route path="comics" element={<Comics addToCart={addToCart} />} />
          <Route path="adventure" element={<Adventure addToCart={addToCart} />} />
          <Route path="children" element={<Children addToCart={addToCart} />} />
          <Route path="poetry" element={<Poetry addToCart={addToCart} />} />
          <Route path="drama" element={<Drama addToCart={addToCart} />} />
          <Route path="self-help" element={<SelfHelp addToCart={addToCart} />} />
          <Route path="spiritual" element={<Spiritual addToCart={addToCart} />} />
          <Route path="cookbooks" element={<Cookbooks addToCart={addToCart} />} />
          <Route path="science-fiction" element={<ScienceFiction addToCart={addToCart} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
