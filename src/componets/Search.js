import React from 'react';
import search_icon from "./img/search_icon.svg"

import './section.css'

export default function Search() {
  return (
    <div className='header__search'>
      <input type='text' className='input__search' />
      <button className='btn__search'><img src={search_icon} /></button>
    </div>
  )
}
