import react from "react";
import {IconArrowDown, IconArrowRight, IconCalc} from "../../components/Buttons";
import Box from "../../components/Box/Box";

import SlideCategory from "../../components/Swiper/Swiper";
import {DiplomIcon, ExpIcon, ProjIcon} from "../../components/Icons/CommonIcons";

const CategoryScreen = () => {
    return (
        <div className={'onescreen'}>
            <Box type={'category  angle-outer-left'}>
                <div className={'box_content'}>
                    <span className={'UPheading'}>ЧАСТНОЕ / МАЛОЭТАЖНОЕ </span>
                    <h2>СТРОИТЕЛЬСТВО</h2>

                    <p>Мы проектируем, строим, затем производим внутреннюю и наружную отделку. Подключаем
                        коммуникации.</p>
                    <p>
                        Мы проектируем, строим, затем производим внутреннюю и наружную
                        отделку. Подключаем коммуникации.
                    </p>
                </div>
                <div className={'contact_links'}>
                    <ul>
                        <li>
                            <ExpIcon/>
                            Большой опыт
                        </li>
                        <li>
                            <DiplomIcon/> ДИПЛОМИРОВАННЫЕ СПЕЦИАЛИСТЫ
                        </li>
                        <li>
                            <ProjIcon/> Различные варианты проектов
                        </li>

                    </ul>
                </div>

                {/*<div className={'buttons'}>*/}
                {/*    <button className={'btn '}>Оставить заявку</button>*/}
                {/*    <button className={'btn btn-icon-only'}>*/}
                {/*        <IconArrowRight/>*/}
                {/*    </button>*/}
                {/*    <button className={'btn btn-icon'}>*/}
                {/*        <IconCalc/>*/}
                {/*        Расчитать стоимость*/}
                {/*    </button>*/}
                {/*</div>*/}


            </Box>
            <div className={'box-image'}>
                <SlideCategory/>

            </div>
        </div>
    )
}

export default CategoryScreen