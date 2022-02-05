import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swiperPosterPageItem.css";

// import required modules
import { EffectCards } from "swiper";

export default function App({ arr }) {
    // console.log('arr', arr)
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {arr.map(item => {
                    return (
                        <SwiperSlide>
                            <div className="swiper-poster__wrapper">
                                <img className='img_poster' src={item.link} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}
