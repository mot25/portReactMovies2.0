import React, { useEffect, useState } from 'react';
import Similars from '../componets/swiper/similars/Similars';
import SwiperActorsAndValue from '../componets/swiper/swiperActorsAndValue/SwiperActorsAndValue';
import SwipetComments from '../componets/swiper/swipetComments/SwipetComments';
import SwiperPosterPageItem from '../componets/swiper/swiperPosterPageItem/SwiperPosterPageItem';
import { useParams } from 'react-router-dom'

import { API_KEY_MOVIES } from '../config'

import arrow_circle_btn from './img/svg-editor-image.svg'
export default function Movie() {
    let { id } = useParams()

    const [idMain, setidMain] = useState(id)


    const [movie, setmovie] = useState()
    const [loadMainFetch, setloadMainFetch] = useState(false)

    const [arrStars, setarrStars] = useState({})
    const [loadStars, setloadStars] = useState(false)


    const [arrSimpleActers, setarrSimpleActers] = useState()
    const [loadSimpleActers, setloadSimpleActerss] = useState(false)


    const [arrActorandValue, setarrActorandValue] = useState()
    const [loadActorandValue, setloadActorandValue] = useState(false)


    const [arrcomments, setarrcomments] = useState()
    const [loadcomments, setloadcomments] = useState(false)




    const fetchMain = (id) => {
        fetch(`https://imdb-api.com/en/API/Title/${API_KEY_MOVIES}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`)
            .then(res => res.json())
            .then(data => {
                setmovie(data);
                setloadMainFetch(true)
            })
    }




    const setArrStarActors = () => {
        const arr = []
        for (const key of movie.actorList) {
            for (const iterator of movie.starList) {
                if (key.id === iterator.id) {
                    arr.push(key);
                }
            }

        }
        setarrStars(arr)
        setloadStars(true)
    }

    const fillSimilars = () => {
        setarrSimpleActers(movie.similars)
        setloadSimpleActerss(true)
    }
    const actorList = () => {
        setarrActorandValue(movie.actorList)
        setloadActorandValue(true)
    }

    const fetchComments = () => {
        fetch(`https://imdb-api.com/en/API/Reviews/${API_KEY_MOVIES}/${id}`)
            .then(res => res.json())
            .then(data => {
                setarrcomments(data.items);
                setloadcomments(true)
            })
    }

    const headerBgc = () => {
        document.querySelector('.header__inner').style.backgroundImage = `url("${movie.posters.backdrops[Math.floor(Math.random() * movie.posters.backdrops.length + 1)].link}")`
    }



    useEffect(() => {
        fetchMain(idMain)
        if (loadMainFetch) {
            actorList()
            fetchComments()
            fillSimilars()
            const interBgc = setInterval(() => {
                headerBgc()
            }, 20000);
            setArrStarActors()
            return () => {
                clearTimeout(interBgc);
                document.querySelector('.header__inner').style.backgroundImage = 'url(https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX1900_CR0,662,1900,150_AL_.jpg)'
            }
        }
    }, [loadMainFetch])


    const clickBtn = () => {
        document.querySelector('.read__more_btn').classList.toggle('active_btn')
    }


    return (
        <>
            {loadMainFetch ? <div className="basePage container details isRedesign contentCard contentCard_neo  has-subscription-button">
                <div div className="page-wrapper" >
                    <div className="basePage__inner">
                        <section className="pageSection pageSection_mGap contentCard__pageSection contentCard__pageSection_mGap">
                            <div className="pageSection__container">
                                <div className="pageSection__container-inner">
                                    <div className="contentCard__mainContent">
                                        <div className="contentCard__container">
                                            <div className="contentCard__info">
                                                <div className='header__page'>
                                                    <div className="header__page-img">
                                                        {movie.posters.posters && <SwiperPosterPageItem arr={movie.posters.posters} />}
                                                    </div>
                                                    <div className='header_info'>
                                                        <h1 className='header_title'>{movie.fullTitle}</h1>
                                                        <h1 className='header_title'>{movie.title}</h1>
                                                        <h1 className='header_title'>О фильме</h1>
                                                        <div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>Год производства:</div>
                                                                <div className='header__page__item'>{movie.year}</div>
                                                            </div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>Страна:</div>
                                                                <div className='header__page__item'>{movie.countries}</div>
                                                            </div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>Жанр:</div>
                                                                <div className='header__page__item'>{movie.genres}</div>
                                                            </div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>Слоган:</div>
                                                                <div className='header__page__item'>«{movie.tagline}»</div>
                                                            </div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>Режиссер:</div>
                                                                <div className='header__page__item'>{movie.directors}</div>
                                                            </div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>imDbRating:</div>
                                                                <div className='header__page__item'>{movie.imDbRating}</div>
                                                            </div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>Рейтинг MPAA:</div>
                                                                <div className='header__page__item'>{movie.contentRating}</div>
                                                            </div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>Время:</div>
                                                                <div className='header__page__item'>{movie.runtimeMins} мин. / {movie.runtimeStr}</div>
                                                            </div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>Языки:</div>
                                                                <div className='header__page__item'>{movie.languages}</div>
                                                            </div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>Награды:</div>
                                                                <div className='header__page__item'>{movie.awards}</div>
                                                            </div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>Бюджет:</div>
                                                                <div className='header__page__item'>{movie.boxOffice.budget}</div>
                                                            </div>
                                                            <div className='header__page__items'>
                                                                <div className='header__page__item'>Сборы:</div>
                                                                <div className='header__page__item'>{movie.boxOffice.cumulativeWorldwideGross}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="watchMedallions contentCard__watchMedallions">
                                                    <div className="watchMedallions__content">
                                                        {loadStars ? arrStars.map(item => {
                                                            return <a key={item.id} href="#"
                                                                className="nbl-medallion nbl-medallion_type_inkur nbl-medallion_size_cobra watchMedallions__nbl-medallion">
                                                                <div className="nbl-medallion__content">
                                                                    <div
                                                                        className="nbl-avatar nbl-avatar_size_esprit nbl-avatar_isFullyRounded_0 nbl-avatar_available watchMedallions__nbl-avatar">
                                                                        <div className="nbl-avatar__body"><img className="nbl-avatar__image"
                                                                            src={item.image}
                                                                            alt="" /></div>
                                                                    </div>
                                                                    <div className="nbl-medallion__noPhotoAvatar">
                                                                        <div className="nbl-icon nbl-medallion__noPhotoAvatarIcon"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="nbl-medallion__caption">{item.name}</div>
                                                            </a>
                                                        }) : <h2> Loading... </h2>}
                                                    </div>
                                                </div>
                                                <div className="watchDescription contentCard__watchDescription">
                                                    <div className="clause clause_is-native watchDescription__clause"><a
                                                        className="nbl-blockHeader nbl-blockHeader_composition_tebhat nbl-blockHeader_arrowMode_none nbl-blockHeader_size_zylros nbl-blockHeader_fullWidth_false clause__nbl-blockHeader">
                                                        <div className="nbl-blockHeader__textBlock">
                                                            <div className="nbl-blockHeader__textBlockContent">
                                                                <div className="nbl-blockHeader__title" title="О фильме">
                                                                    <div className="nbl-blockHeader__titleText">О фильме<div
                                                                        className="nbl-blockHeader__titleArrow">
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="nbl-blockHeader__arrow">
                                                            <div
                                                                className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon">
                                                            </div>
                                                        </div>
                                                    </a>

                                                        <div className="clause__text is-truncated">
                                                            <div className="clause__text-inner hidden-children">
                                                                <p>{movie.plot}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="contentCard__underside">
                            <section
                                className="pageSection pageSection_detailsSelection contentCard__pageSection contentCard__pageSection_detailsSelection"
                                id="relatedList">
                                <div className="pageSection__container">
                                    <div className="pageSection__container-inner">
                                        <div className="gallery gallery gallery_dark gallery_ivi-carousel pageSection__gallery">
                                            <div className="gallery__blockHeader">
                                                <div
                                                    className="nbl-blockHeader nbl-blockHeader_composition_zel nbl-blockHeader_arrowMode_none nbl-blockHeader_size_zylros nbl-blockHeader_fullWidth_false gallery__headerLink__nbl-blockHeader">
                                                    <div className="nbl-blockHeader__textBlock">
                                                        <div className="nbl-blockHeader__textBlockContent">
                                                            <div className="nbl-blockHeader__title" title="Смотрите также">
                                                                <h2 className="nbl-blockHeader__titleText">Смотрите также<div
                                                                    className="nbl-blockHeader__titleArrow">
                                                                    <div
                                                                        className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon">
                                                                    </div>
                                                                </div>
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="nbl-blockHeader__arrow">
                                                        <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gallery__carousel">
                                                <div className="gallery__viewport">
                                                    <div className="gallery__viewport-inner">
                                                        <div
                                                            className="gallery__list gallery__list_slimPosterBlock gallery__list_type_poster">
                                                            <Similars arr={arrSimpleActers} flag={loadSimpleActers} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="pageSection contentCard__pageSection" id="creatorsList">
                                <div className="pageSection__container">
                                    <div className="pageSection__container-inner">
                                        <div className="creatorsList contentCard__creatorsList">
                                            <div className="gallery gallery_creators gallery gallery_mGap pageSection__gallery">
                                                <div className="gallery__blockHeader">
                                                    <div
                                                        className="nbl-blockHeader nbl-blockHeader_composition_zel nbl-blockHeader_arrowMode_none nbl-blockHeader_size_zylros nbl-blockHeader_fullWidth_false nbl-blockHeader_hasLink gallery__headerLink__nbl-blockHeader">
                                                        <div className="nbl-blockHeader__textBlock">
                                                            <div className="nbl-blockHeader__textBlockContent">
                                                                <div className="nbl-blockHeader__title">
                                                                    <h2 className="nbl-blockHeader__titleText"><a
                                                                        className="nbl-link nbl-link_style_paxe nbl-blockHeader__nbl-link"
                                                                        href="/watch/193739/person">Актёры и создатели</a>
                                                                        <div className="nbl-blockHeader__titleArrow">
                                                                            <div
                                                                                className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon">
                                                                            </div>
                                                                        </div>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="nbl-blockHeader__arrow">
                                                            <div
                                                                className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gallery__carousel">
                                                    <div className="gallery__viewport">
                                                        <div className="gallery__viewport-inner">
                                                            <div
                                                                className="gallery__list gallery__list_fixedSlimPosterBlock gallery__list_type_person">
                                                                <SwiperActorsAndValue arr={arrActorandValue} flag={loadActorandValue} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="pageSection contentCard__pageSection" id="storyFact">
                                <div className="pageSection__container">
                                    <div className="pageSection__container-inner">
                                        <div className="plot contentCard__plot">
                                            <div className="clause clause_is-native">
                                                <div className="clause__header">
                                                    <h2 id='plot' className="clause__title">Сюжет</h2>
                                                    <div
                                                        className="iconedText iconedText_size_orino iconedText_style_kindel contentCard__iconedText">
                                                        <div className="iconedText__icon iconedText__icon iconedText__icon_about"></div>
                                                        <div className="iconedText__textBlock">
                                                            <div className="iconedText__title">Осторожно, спойлеры</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="clause__text btn-more-posit is-truncated">
                                                    <a id='scrollArea' href='#plot' className='read__more_btn'>
                                                        <img id='listItem' onClick={(() => clickBtn())} src={arrow_circle_btn} />
                                                    </a>
                                                    <div className="pages_plot">
                                                        <p>{movie.wikipedia.plotShort.plainText}</p>
                                                        {/* <p>{movie.wikipedia.plotFull.plainText}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="pageSection contentCard__pageSection">
                                <div className="pageSection__container">
                                    <div className="pageSection__container-inner">
                                        <div className="comments contentCard__comments">
                                            <header className="comments__header">
                                                <div className="comments__links">
                                                    <div className="extraLinks comments__extraLinks">
                                                        <ul className="extraLinks__list">
                                                            <li className="extraLinks__item"><a className="nbl-link nbl-link_style_paxe extraLinks__nbl-link"
                                                                href="/watch/193739/comments">Отзывы</a>
                                                                <div
                                                                    className="nbl-superscript nbl-superscript_style_default nbl-superscript_size_sheicu extraLinks__nbl-superscript">
                                                                    <div className="nbl-superscript__text"> {loadcomments ? arrcomments.length : ' loading...'}</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="comments__subtitle">о фильме «{movie.title}»</div>
                                            </header>
                                            <div className="gallery gallery_ivi-carousel">
                                                <div className="gallery__carousel">
                                                    <div className="gallery__viewport">
                                                        <div className="gallery__viewport-inner">
                                                            <div
                                                                className="gallery__list gallery__list_ugcTile gallery__list_type_ugcTile">
                                                                {<SwipetComments arr={arrcomments} load={loadcomments} />}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div >
            </div > : <h1>loading...</h1>}

        </>



    )
}
