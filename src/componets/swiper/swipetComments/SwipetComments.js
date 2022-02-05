import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import 'swiper/css/scrollbar';

import "./swipetComments.css";
import SwiperCore, {
    Autoplay
} from 'swiper';

SwiperCore.use([Autoplay]);


export default function SwipetComments({ arr, load }) {
 


    const windowOuterWidth = window.outerWidth
    // console.log('windowOuterWidth', windowOuterWidth)
    return (
        <Swiper
            autoplay={{
                delay: 5000,
                disableOnInteraction: true
            }} slidesPerView={4}
            className="mySwiperComments">
            {load ? arr.map(item => {
                return (
                    <SwiperSlide  >
                        <div key={item.id} className="gallery__item">
                            <div className="ugcTile gallery__ugcTile">
                                <div className="ugcTile__inner">
                                    <div className="ugcTile__author">{item.username}</div>
                                    <div className="ugcTile__textBlock">{item.title}</div>
                                    <div className="ugcTile__date">{item.date}</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            }) : <h1>loading...</h1>}
        </Swiper>
    )
}
