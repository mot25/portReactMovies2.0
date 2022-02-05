import React from 'react'
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'

import SwiperCore, {
    Navigation, Autoplay
} from 'swiper';


import './topSwiper.css'
SwiperCore.use([[Navigation, Autoplay]])



export default function TopSwiper({ itemsMovies, loading }) {

    const windowOuterWidth = window.outerWidth


    return (
        <>
            <Swiper navigation={true} loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true
                }} slidesPerView={windowOuterWidth < 1200 ? windowOuterWidth < 1000 ? windowOuterWidth < 670 ? windowOuterWidth < 450 ? 1 : 1 : 2 : 3 : 4}
                className="mySwiperTop">
                {loading ? <SwiperSlide >
                    <h1>loading...</h1>
                </SwiperSlide> : itemsMovies.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Link to={"movie/" + item.id} className="swiper_items_TOP">
                                <img src={item.image} />
                                <span>{item.title.lenght < 12 ? `item.title.slice(0, 12)...` : item.title}</span>
                                <div>
                                    <span>{item.year}</span>. <span>{item.imDbRating}</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}