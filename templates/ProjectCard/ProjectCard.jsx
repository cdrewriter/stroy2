import Box from "../../components/Box/Box";
import SwiperProjectCard from "../../components/Swiper/SwiperProjectCard";


const ProjectCard = () => {
    return (
        <Box>
            <div className={'projectcard_swiper-gallery'}><SwiperProjectCard /></div>
            <div className={'projectcard-text'}>

                <h3>Двухэтажный дом</h3>
                <span className={'UPheading text-darkBlue'}>из пеноблока и декоративного кирпича</span>
                <div className={'projectcard-desc'}>
                    <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit</p>
                </div>
                <ul className={'specs projectcard-specs'}>

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
            </div>
            <ul className={'specs projectcard-specs-full'}>

                <li>
                    <span className={'prefix'}>Фундамент</span><span className={'value'}>свайно-ленточный</span>
                </li>
                <li>
                    <span className={'prefix'}>Стены и Перекрытия</span><span className={'value'}>Газоблок, минеральная плита</span>
                </li>
                <li>
                    <span className={'prefix'}>Кровля</span><span className={'value'}>Металлочерепица</span>
                </li>
                <li>
                    <span className={'prefix'}>Фасад</span><span className={'value'}>Сайдинг</span>
                </li>

            </ul>
            <div className={'projectcard-links'}>
                <a className={'btn btn-secondary'}>Получить смету на проект</a>
                <a className={'btn'}>Оставить заявку</a>
            </div>
            <style jsx>{`
              .projectcard-text {
                grid-column: 6/-2;
              }
              .projectcard-specs-full {
              border: 4px solid rgba(246,246,246,1);
              padding: 1.5em;
              grid-column: 6/span 3;
              }
              .projectcard-links {
    grid-column: 2/5;
    text-align: center;
}
              .projectcard-specs-full .prefix {
                  text-transform: uppercase;
                  }
              

       
            `}</style>
        </Box>

    )
}
export default ProjectCard;