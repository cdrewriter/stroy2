import Logo from "../logo/Logo";

const Footer = () => (
    <footer className="shadow-xl">
        <div className="mt-12 relative pt-6">

            <div className="px-24 relative z-10 mx-auto flex-wrap lg:flex justify-between px-6 pt-8 lg:pt-32 pb-6 lg:pb-28">
                <div className="lg:w-1/4 pb-12 lg:pb-0">
                    <Logo />
                    <div className="mt-8 adress text-gray-600">Миасс, ул. Объездная дорога, д. 1/7</div>
                    <div className="my-8 phone-footer">
                        <ul>
                            <li>+7 951 478 2780</li>
                            <li>
                                +7 (904) 305-16-33</li>
                        </ul>
                    </div>
                    <div className="my-12 mail-footer">
                        <a className={'font-bold'} href={'mailto: ventservis74@mail.ru'}>ventservis74@mail.ru</a>
                    </div>
                </div>
                <div className="lg:w-3/5 sm:flex justify-between lg:justify-between">
                    <div className="lg:pr-24 pb-12 lg:pb-0">
                        <h3 className="mb-6 text-lg text-white font-bold">Строительство</h3>
                        <ul className="">

                            <li className="mb-3">
                                <a href="">Жилых зданий</a>
                            </li>
                            <li className="mb-3">
                                <a href="">Торговых центров</a>
                            </li>
                            <li>
                                <a href="">Складских помещений</a>
                            </li>
                            <li>
                                <a href="">Автомастерских</a>
                            </li>
                            <li>
                                <a href="">Автомойки</a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:pr-24 pb-12 lg:pb-0">
                        <h3 className="mb-6 text-lg text-white font-bold">УСЛУГИ</h3>
                        <ul className="">
                            <li className="mb-3">
                                <a href="">Проектирование</a>
                            </li>
                            <li className="mb-3">
                                <a href="">Монтаж инженерных систем</a>
                            </li>
                            <li className="mb-3">
                                <a href="">Кровельные работы</a>
                            </li>
                            <li>
                                <a href="">Отделочные работы</a>
                            </li>
                            <li>
                                <a href="">Реконструкция зданий</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-lg text-white font-bold">О компании</h3>
                        <ul className="">
                            <li className="mb-3">
                                <a href="">Контакты</a>
                            </li>
                            <li className="mb-3">
                                <a href="">Наши объекты</a>
                            </li>
                            <li className="mb-3">
                                <a href="">Документы</a>
                            </li>
                            <li>
                                <a href="">Связаться с нами</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-full flex lg:justify-end items-end mt-12 lg:mt-0">
                    <div className="bg-white p-2 rounded-full mr-2.5">
                        <img src="https://cdn.tuk.dev/assets/templates/weCare/fb.png" />
                    </div>
                    <div className="bg-white p-2 rounded-full mr-2.5">
                        <img src="https://cdn.tuk.dev/assets/templates/weCare/twitter.png" />
                    </div>
                    <div className="bg-white p-2 rounded-full mr-2.5">
                        <img src="https://cdn.tuk.dev/assets/templates/weCare/yt.png" />
                    </div>
                </div>
            </div>

        </div>
    </footer>
);
export default Footer;
