import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import 'swiper/css/scrollbar';

import "./SwiperFamousFilms.css";
import SwiperCore, {
    Navigation, Autoplay
} from 'swiper';

SwiperCore.use([Navigation, Autoplay]);


export default function SwiperFamousFilms({ itemsMovies, loading }) {



    return (
        <>
            <Swiper navigation={true} loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true
                }} slidesPerView={5}
                className="mySwiper">
                {loading ? <SwiperSlide >
                    <h1>loading...</h1>
                </SwiperSlide> : itemsMovies.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <a href='#' className="swiper-items">
                                <img src={item.image} />
                                <span>{item.title.lenght < 12 ? `item.title.slice(0, 12)...` : item.title}</span>
                                <div>
                                    <span>{item.year}</span>. <span>{item.imDbRating}</span>
                                </div>
                            </a>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}