import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './header.css'

function Header() {
  const reserveSize = useSelector(state => state.reserve.length)

  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={Logo} alt="logo do projeto" />
      </Link>
      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas Reservas</strong>
          <span>{reserveSize} Reservas</span>
        </div>
      </Link>
    </header>
  );
}

export default Header;
