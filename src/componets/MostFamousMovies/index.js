import React, { useState, useEffect } from 'react';
import { API_KEY_MOVIES } from '../../config.js'
import SwiperFamousFilms from '../swiper/MostPopular/SwiperFamousFilms'
import '../section.css'
export default function MostFamousMovies() {

  const [loading, setloading] = useState(true)
  const [arrMovies, setarrMovies] = useState([])
  const fetchTopMovies = async (mode) => {
    await fetch(`https://imdb-api.com/ru/API/${mode}/${API_KEY_MOVIES}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        setarrMovies(data)
        setloading(false)
      })

  }

  useEffect(() => {
    fetchTopMovies('MostPopularTVs')
  }, [])

  const modeFun = (e) => {
    fetchTopMovies(e.target.value)
    document.querySelectorAll('.btn_mode').forEach(element => {
      element.classList.remove('active')
      if (element.dataset.value !== e.target.value) {
        console.dir(element);
        element.classList.add('active')
      }
      console.dir(element.classList);
    });
  }

  return <section className='MostFamousMovies'>
    <div className='wrapper_mode'>
      <span className='span_mode'>Most popular</span>
      <button className='btn_mode active' data-value='MostPopularMovies' onClick={e => modeFun(e)} value="MostPopularMovies">movies</button>
      <button className='btn_mode ' data-value='MostPopularTVs' onClick={e => modeFun(e)} value="MostPopularTVs">serils</button>
    </div>
    <SwiperFamousFilms loading={loading} itemsMovies={arrMovies.items} />
  </section>;
}
