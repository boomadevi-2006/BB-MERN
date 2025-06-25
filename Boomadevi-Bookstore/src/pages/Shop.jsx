import React from 'react';
import { Outlet } from 'react-router-dom';
import ShopNavbar from '../components/ShopNavbar';
import './Shop.css'
const Shop = () => {
  return (
    <div>
      <ShopNavbar />
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Shop;
