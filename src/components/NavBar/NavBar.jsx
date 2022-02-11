import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './navBar.css'
import {Link }from 'react-router-dom'
const NavBar = () => {
  return <div className='nav-wrap'>
      <Link to="/">
      <h1>Blockbuster</h1>
      </Link>
      <nav>
          <ul>
              <li> <Link to="/">products</Link></li>
              <li> <Link to={'/category/accion'}>accion</Link></li>
              <li> <Link to={'/category/comedia'}>comedia</Link></li>
              <li><Link to={'/category/terror'}>terror</Link></li>
              <CartWidget></CartWidget>
          </ul>
      </nav>
  </div>;
};

export default NavBar;
