// import Swiper core and required modules
import SwiperCore, {Navigation, Thumbs, Pagination, EffectFade, Scrollbar, A11y} from 'swiper';
import React, { useState } from 'react';
import {Swiper, SwiperSlide, } from 'swiper/react';
import Box from "../Box/Box";
import {Chevron} from "../Icons/Chevron";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs, Pagination, Scrollbar, A11y, EffectFade]);




export default function SwiperProjectCard() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
        <Swiper  onSwiper={setThumbsSwiper}  navigation      spaceBetween={50}  pagination={{ clickable: true }}   slidesPerView={3} >

            <SwiperSlide className={''}>
                <img className={'slide_img'}
                     src="/public/house_04.jpg"
                     alt="Дом два этажа"
                />
            </SwiperSlide>
            <SwiperSlide className={''}>
                <img className={'slide_img'}
                     src="/public/house_05.jpg"
                     alt="Дом два этажа"
                />
            </SwiperSlide>
            <SwiperSlide className={''}>
                <img className={'slide_img'}
                     src="/public/house_06.jpg"
                     alt="Дом два этажа"
                />
            </SwiperSlide>
            <SwiperSlide className={''}>
                <img className={'slide_img'}
                     src="/public/house_03.jpg"
                     alt="Дом два этажа"
                />
            </SwiperSlide>
</Swiper>

        <Swiper className={''}
                // spaceBetween={0}
                // slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }}
                watchSlidesVisibility
                watchSlidesProgress
            //loopFillGroupWithBlank={true}
                effect="fade"

                // centeredSlides={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            //     loop={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
        >
            {/*<SwiperSlide><img src={'public/house_01.jpg'}/></SwiperSlide>*/}
            {/*<SwiperSlide><img src={'public/house_02.jpg'}/></SwiperSlide>*/}

            <SwiperSlide className={''}>
                <img className={'slide_img'}
                         src="/public/house_04.jpg"
                         alt="Дом два этажа"
                    />
            </SwiperSlide>
            <SwiperSlide className={''}>
                <img className={'slide_img'}
                         src="/public/house_05.jpg"
                         alt="Дом два этажа"
                    />
            </SwiperSlide>
            <SwiperSlide className={''}>
                <img className={'slide_img'}
                         src="/public/house_06.jpg"
                         alt="Дом два этажа"
                    />
            </SwiperSlide>
            <SwiperSlide className={''}>
                <img className={'slide_img'}
                         src="/public/house_03.jpg"
                         alt="Дом два этажа"
                    />
            </SwiperSlide>


            {/*<style jsx>{`*/}

            {/*  .swiper-container {*/}
            {/*    overflow: visible !important;*/}

            {/*  }*/}

            {/*  .swiper_custom > .swiper-wrapper {*/}
            {/*    display: grid !important;*/}
            {/*  }*/}
            {/*`}</style>*/}
            {/*<div className={'arrows'}>*/}


            {/*    <a href={'#'} className={'arrowprev'} > <Chevron clme={'transform rotate-90'} />Ранее</a>*/}
            {/*    <a href={'#'} className={'arrownext'} > <Chevron clme={'transform -rotate-90'} />Далее</a>*/}
            {/*</div>*/}
            <style jsx>{`
            .slide_img {
            object-fit: contain;
            }
            .projectcard_swiper-gallery {
        grid-column: 2/6;
    }
         `}</style>
        </Swiper>

</>

    );
};
