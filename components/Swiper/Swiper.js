// import Swiper core and required modules
import SwiperCore, {Navigation, Pagination, EffectFade, Scrollbar, A11y} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export default function SlideCategory() {
    return (
        <Swiper className={'swiper_custom'}
                 spaceBetween={0}
                slidesPerView={3}
                //loopFillGroupWithBlank={true}
                effect="fade"

                centeredSlides={true}
            //pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {/*<SwiperSlide><img src={'public/house_01.jpg'}/></SwiperSlide>*/}
            {/*<SwiperSlide><img src={'public/house_02.jpg'}/></SwiperSlide>*/}
            <SwiperSlide><img src={'public/house_03.jpg'}/></SwiperSlide>
            <SwiperSlide><img src={'public/house_04.jpg'}/></SwiperSlide>
            {/*<SwiperSlide><div style={{transformOrigin: '0px 0px 0px'}}><img src={'public/house_05.jpg'}/></div></SwiperSlide>*/}
            <SwiperSlide><img src={'public/house_06.jpg'}/></SwiperSlide>
            <style jsx>{`
            
              .swiper-container {
                overflow: visible !important;
              
            }
              .swiper_custom > .swiper-wrapper {
                display: grid !important;
              }
            `}</style>
        </Swiper>

    );
};
