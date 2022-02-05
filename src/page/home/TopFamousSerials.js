import React, { useState, useEffect } from 'react';
import { API_KEY_MOVIES } from '../../config';
import TopSwiper from '../../componets/swiper/topMovies/TopSwiper'
import '../section.css'

export default function TopFamousSerials() {

  const [loading, setloading] = useState(true)
  const [arrMovies, setarrMovies] = useState([])

  const fetchTopMovies = async (mode) => {
    await fetch(`https://imdb-api.com/ru/API/${mode}/${API_KEY_MOVIES}`)
      .then(response => response.json())
      .then(data => {
        setarrMovies(data)
        setloading(false)
      })

  }

  useEffect(() => {
    fetchTopMovies('Top250TVs')
  }, [])

  return (
    <section className="TopFamous">
      <div className="container">
        <div className="TopFamous_title">
          <h2>Serials</h2> <span>|</span> <p>Look more</p>
        </div>
        <TopSwiper itemsMovies={arrMovies.items} loading={loading} />
      </div>
    </section>
  );
}
