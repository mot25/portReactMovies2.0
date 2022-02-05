import React from "react";
import { Link } from "react-router-dom";
import Search from '../Search'

import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <Link to='/' className="header__inner">
        <Search />
        <ul className="header__list">
          <Link to='/movie' className="header__item">Фильм</Link>
          <Link to='#' className="header__item">Сериал</Link>
          <Link to='#' className="header__item">Закладки</Link>
        </ul>
      </Link>
    </header>
  );
}
