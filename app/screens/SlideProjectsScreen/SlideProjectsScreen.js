import Box from "../../components/Box/Box";

const SlideProjectsScreen = () => {
    return (
        <div className={'screen slide__projects-screen'}>
            <Box type={'slide_projects'}>
                <img className={'slide_img'}
                     src="/app/public/house_04.jpg"
                     alt="Дом два этажа"
                    // width={500}
                    // height={500}
                />
                <div className={'box_content'}>
                    <h3>Двухэтажный дом</h3>
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



            </Box>
            <Box type={'slide_projects next'}>
                <img className={'slide_img'}
                     src="/app/public/house_04.jpg"
                     alt="Дом два этажа"
                    // width={500}
                    // height={500}
                />
                <div className={'box_content'}>
                    <h3>Двухэтажный дом</h3>
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



            </Box>
            <Box type={'slide_projects prev'}>
                <img className={'slide_img'}
                     src="/app/public/house_04.jpg"
                     alt="Дом два этажа"
                    // width={500}
                    // height={500}
                />
                <div className={'box_content'}>
                    <h3>Двухэтажный дом</h3>
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



            </Box>

        </div>
    )
}

export default SlideProjectsScreen