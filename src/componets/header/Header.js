import React from "react";
import search_icon from "./img/search_icon.svg"
import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <Link to='/' className="header__inner">
        <div className='header__search'>
          <input type='text' className='input__search' />
          <button className='btn__search'><img src={search_icon} /></button>
        </div>
        <ul className="header__list">
          <Link to='/about' className="header__item">Фильм</Link>
          <Link to='#' className="header__item">Сериал</Link>
          <Link to='#' className="header__item">Закладки</Link>
        </ul>
      </Link>
    </header>
  );
}
