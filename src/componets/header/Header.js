import React from "react";
import logo from "./img/logo.png"
import search_icon from "./img/search_icon.svg"


import './Header.css'

// const axios = require('axios');
// const cheerio = require('cheerio');




export default function Header() {


  //  async function getImgKinoSearch() {
  //   const data = await axios.get(
  //     "https://www.gismeteo.ru/weather-kaliningrad-4225/"
  //   );

  //   console.log(data);
  // }
  // getImgKinoSearch()
  return (
    <header className='header'>
      <div className="header__inner">
        {/* <div className="header-img">
          <img className='header__img' src={logo} />
        </div> */}
        <div className='header__search'>
          <input type='text' className='input__search' />
          <button className='btn__search'><img src={search_icon} /></button>
        </div>
        <ul className="header__list">
          <li className="header__item">Фильм</li>
          <li className="header__item">Сериал</li>
          <li className="header__item">Закладки</li>
        </ul>
      </div>
    </header>
  );
}
