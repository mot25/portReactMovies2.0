import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom"

import "swiper/css/bundle";
import 'swiper/css/scrollbar';


import './similars.css'

import SwiperCore, {
    Autoplay
} from 'swiper';

SwiperCore.use([Autoplay]);

export default function Similars({ arr, flag }) {
    return (
        <Swiper
            autoplay={{
                delay: 5000,
                disableOnInteraction: true
            }}
            slidesPerView={7}
        >

            {flag ? arr.map(item => (
                <SwiperSlide key={item.id}>
                    <div className="gallery__item">
                        <Link to={"movie/" + item.id} className="nbl-slimPosterBlock nbl-slimPosterBlock_altHover nbl-slimPosterBlock_type_poster nbl-slimPosterBlock_status_subscription nbl-slimPosterBlock_iconStatus_none nbl-slimPosterBlock_available gallery__nbl-slimPosterBlock">
                            <div className="nbl-slimPosterBlock__imageSection">
                                <div
                                    className="nbl-poster nbl-poster_type_poster slimPosterBlock__nbl-poster">
                                    <img className="nbl-poster__image" src={item.image} />
                                    <div className="nbl-poster__properties">
                                        <div className="nbl-poster__properties-inner">
                                            <div className="nbl-poster__propertiesRow">
                                                <div
                                                    className="nbl-poster__nbl-ratingCompact nbl-ratingCompact nbl-ratingCompact_style_utis nbl-ratingCompact_hasExtra_0">
                                                    <div className="nbl-ratingCompact__value">
                                                        <div
                                                            className="nbl-ratingCompact__valueInteger">
                                                            {item.imDbRating}</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nbl-slimPosterBlock__textSection">
                                <div className="nbl-slimPosterBlock__title">{item.fullTitle}</div>
                            </div>
                        </Link></div>
                </SwiperSlide>
            )) : <SwiperSlide >
                <h1>loading...</h1>
            </SwiperSlide>}
        </Swiper>
    );
};