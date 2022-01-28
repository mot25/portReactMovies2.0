import React, { useState, useEffect } from 'react';
import { API_KEY_MOVIES } from '../../config.js'
import TopSwiper from '../swiper/topMovies/TopSwiper'
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
    fetchTopMovies('Top250Movies')
  }, [])

  return (
    <section className="TopFamous">
      <div className="container">

        <div className="TopFamous_title">
          <h2>Films</h2> <span>|</span> <p>Look more</p>
        </div>
        <TopSwiper itemsMovies={arrMovies.items} loading={loading} />
      </div>
    </section>
  );
}
// https://imdb-api.com/en/API/Top250Movies/k_rc78btn4