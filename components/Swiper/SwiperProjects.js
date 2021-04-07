// import Swiper core and required modules
import SwiperCore, {Navigation, Pagination, EffectFade, Scrollbar, A11y} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';
import Box from "../Box/Box";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export default function SwiperProjects() {
    return (
        <Swiper className={' swiper_projects'}
                spaceBetween={0}
                slidesPerView={3}

            //loopFillGroupWithBlank={true}
                effect="fade"
                navigation
                centeredSlides={true}
            //pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
        >
            {/*<SwiperSlide><img src={'public/house_01.jpg'}/></SwiperSlide>*/}
            {/*<SwiperSlide><img src={'public/house_02.jpg'}/></SwiperSlide>*/}
            <SwiperSlide className={'box slide_projects'}>

                    <img className={'slide_img'}
                         src="/public/house_04.jpg"
                         alt="Дом два этажа"
                        // width={500}
                        // height={500}
                    />
                    <div className={'box_content'}>
                        <h3>Двухэтажный дом 4</h3>
                        <span className={'UPheading'}>из пеноблока и декоративного кирпича</span>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
                    </div>
                    <ul className={'specs'}>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                        <li>
                            <span className={'prefix'}>Этажность</span><span className={'value'}>2 + мансарда</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Спальни</span><span className={'value'}>3 (2этаж)</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                    </ul>

                    <div className={'slide_projects-footer'}>
                        <a href={'#'} className={'btn btn-secondary'}>Подробнее</a>
                    </div>



            </SwiperSlide>
            <SwiperSlide className={'box slide_projects'}>

                    <img className={'slide_img'}
                         src="/public/house_05.jpg"
                         alt="Дом два этажа"
                        // width={500}
                        // height={500}
                    />
                    <div className={'box_content'}>
                        <h3>Двухэтажный дом 5</h3>
                        <span className={'UPheading'}>из пеноблока и декоративного кирпича</span>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
                    </div>
                    <ul className={'specs'}>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                        <li>
                            <span className={'prefix'}>Этажность</span><span className={'value'}>2 + мансарда</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Спальни</span><span className={'value'}>3 (2этаж)</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                    </ul>

                    <div className={'slide_projects-footer'}>
                        <a href={'#'} className={'btn btn-secondary'}>Подробнее</a>
                    </div>



            </SwiperSlide>
            <SwiperSlide className={'box slide_projects'}>

                    <img className={'slide_img'}
                         src="/public/house_06.jpg"
                         alt="Дом два этажа"
                        // width={500}
                        // height={500}
                    />
                    <div className={'box_content'}>
                        <h3>Двухэтажный дом 6</h3>
                        <span className={'UPheading'}>из пеноблока и декоративного кирпича</span>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
                    </div>
                    <ul className={'specs'}>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                        <li>
                            <span className={'prefix'}>Этажность</span><span className={'value'}>2 + мансарда</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Спальни</span><span className={'value'}>3 (2этаж)</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                    </ul>

                    <div className={'slide_projects-footer'}>
                        <a href={'#'} className={'btn btn-secondary'}>Подробнее</a>
                    </div>


            </SwiperSlide>
            <SwiperSlide className={'box slide_projects'}>

                    <img className={'slide_img'}
                         src="/public/house_04.jpg"
                         alt="Дом два этажа"
                        // width={500}
                        // height={500}
                    />
                    <div className={'box_content'}>
                        <h3>Двухэтажный дом 4</h3>
                        <span className={'UPheading'}>из пеноблока и декоративного кирпича</span>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
                    </div>
                    <ul className={'specs'}>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                        <li>
                            <span className={'prefix'}>Этажность</span><span className={'value'}>2 + мансарда</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Спальни</span><span className={'value'}>3 (2этаж)</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                    </ul>

                    <div className={'slide_projects-footer'}>
                        <a href={'#'} className={'btn btn-secondary'}>Подробнее</a>
                    </div>



            </SwiperSlide>
            <SwiperSlide className={'box slide_projects'}>

                    <img className={'slide_img'}
                         src="/public/house_03.jpg"
                         alt="Дом два этажа"
                        // width={500}
                        // height={500}
                    />
                    <div className={'box_content'}>
                        <h3>Двухэтажный дом 3</h3>
                        <span className={'UPheading'}>из пеноблока и декоративного кирпича</span>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
                    </div>
                    <ul className={'specs'}>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                        <li>
                            <span className={'prefix'}>Этажность</span><span className={'value'}>2 + мансарда</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Спальни</span><span className={'value'}>3 (2этаж)</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                    </ul>

                    <div className={'slide_projects-footer'}>
                        <a href={'#'} className={'btn btn-secondary'}>Подробнее</a>
                    </div>



            </SwiperSlide>
            <SwiperSlide className={'box slide_projects'}>

                    <img className={'slide_img'}
                         src="/public/house_04.jpg"
                         alt="Дом два этажа"
                        // width={500}
                        // height={500}
                    />
                    <div className={'box_content'}>
                        <h3>Двухэтажный дом 4</h3>
                        <span className={'UPheading'}>из пеноблока и декоративного кирпича</span>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
                    </div>
                    <ul className={'specs'}>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                        <li>
                            <span className={'prefix'}>Этажность</span><span className={'value'}>2 + мансарда</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Спальни</span><span className={'value'}>3 (2этаж)</span>
                        </li>
                        <li>
                            <span className={'prefix'}>Площадь</span><span className={'value'}>140м<sup>2</sup></span>
                        </li>
                    </ul>

                    <div className={'slide_projects-footer'}>
                        <a href={'#'} className={'btn btn-secondary'}>Подробнее</a>
                    </div>



            </SwiperSlide>

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
