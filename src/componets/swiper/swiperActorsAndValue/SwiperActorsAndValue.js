import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/bundle";
import 'swiper/css/scrollbar';
import './swiperActorsAndValue.css'

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
            slidesPerView={10}
        >

            {flag ? arr.map(item => (
                <SwiperSlide key={item.id}>
                    <div className="gallery__item"><a
                        className="fixedSlimPosterBlock fixedSlimPosterBlock_type_person gallery__fixedSlimPosterBlock"
                        href="https://www.ivi.ru/person/haume-kolet-serra">
                        <div className="fixedSlimPosterBlock__imageSection">
                            <div
                                className="poster poster_type_person fixedSlimPosterBlock__poster">
                                <div className="poster__imagePersonWrapper"><img
                                    className="poster__image"
                                    src={item.image} />
                                </div>
                            </div>
                        </div>
                        <div className="fixedSlimPosterBlock__textSection">
                            <div className="fixedSlimPosterBlock__secondTitle">
                                {item.name}</div>
                            <div className="fixedSlimPosterBlock__extra">{item.asCharacter}</div>
                        </div>
                    </a></div>
                </SwiperSlide>
            )) : <SwiperSlide >
                <h1>loading...</h1>
            </SwiperSlide>}
        </Swiper>
    );
};