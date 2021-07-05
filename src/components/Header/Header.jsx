import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './header.css'

function Header() {
  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={Logo} alt="logo do projeto" />
      </Link>
      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas Reservas</strong>
          <span>0 Reservas</span>
        </div>
      </Link>
    </header>
  );
}

export default Header;
