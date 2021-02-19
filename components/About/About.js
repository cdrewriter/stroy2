import react from "react";
import { YMaps, Map } from 'react-yandex-maps';
const AboutPage = () => {
    return (
        <>
            <div className="cont
            ">
                <section className="my-8 font-sans container m-auto flex flex-col md:flex-row sm:items-center">
                    <div
                        className="w-full md:w-2/3 flex flex-col justify-center items-start px-6 py-0 md:py-8 md:px-8 lg:items-start">
                        <label htmlFor="tagline" className="uppercase tracking-wide text-gray-700 font-bold">О
                            компании</label><h1 className="mt-0 mb-4 font-bold">СтройЭксперт</h1><p
                        className="leading-normal mb-4 text-gray-700">Компания начала свою деятельность в области строительства с 2012 года. Совместными усилиями нашего коллектива, за это время, мы спроектировали, а затем создали из стали и бетона объекты строительства, которыми мы можем по праву гордиться.</p>
                        <div className=" relative flex flex-wrap py-6 rounded">
                            <div className="lg:w-1/3 pr-6"><h2
                                className="title-font font-semibold text-gray-900 tracking-widest text-xs">Адрес</h2><p
                                className="mt-1 text-sm">Челябинская обл., г.Миасс, ул. Объездная дорога 1/7</p></div>
                            <div className="lg:w-1/3 pr-6"><h2
                                className="title-font font-semibold text-gray-900 tracking-widest text-xs">Email</h2><a
                                className="text-indigo-500 leading-relaxed">info@stroy.com</a></div>
                            <div className="lg:w-1/3 pr-6"><h2
                                className="title-font font-semibold text-gray-900 tracking-widest text-xs">Телефон</h2>
                                <p className="leading-relaxed">123-456-7890</p></div>
                        </div>
                    </div>
                    <div
                        className="w-full md:w-1/3 flex flex-row md:flex-col justify-between md:justify-center items-center p-2 md:p-8 items-center md:items-start">
                        <div className="flex items-center sm:border-r md:border-b md:border-r-0 p-4 w-1/2 md:w-auto">
                            <div className="w-14 h-14 rounded-full mr-4 bg-gray-300"
                                 alt="Avatar of Jonathan Reinink"></div>
                            <div className=""><h3 className="text-black">Документы</h3><p
                                className="text-gray-700 leading-normal">Документы компании, разрешительные
                                государственные бумаги</p></div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font relative">
                    <div className=" py-24 pl-24 pr-24 mb-24 flex sm:flex-nowrap flex-wrap">
                        <div className="lg:w-2/3 md:w-1/2 rounded-lg p-16 flex h-full ">
                            <YMaps>
                                <div className="absolute inset-0"  style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}}>

                                    <Map defaultState={{ center: [55.114521, 60.149418], zoom: 16 }} width={'100%'} height={'100%'} />
                                </div>
                            </YMaps>

                        </div>
                        <div
                            className="lg:w-1/3 z-10 -mt-40-24 bg-colorGraySub md:w-1/2 bg-white mt-16 p-16 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Написать нам</h2><p
                            className="leading-relaxed mb-5 text-gray-600">Отправьте сообщение и мы Вам ответим как
                            можно скорее</p>
                            <div className="relative mb-4"><label htmlFor="name"
                                                                  className="leading-7 text-sm text-gray-600">Имя</label><input
                                type="text" id="name" name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="relative mb-4"><label htmlFor="email"
                                                                  className="leading-7 text-sm text-gray-600">Email</label><input
                                type="email" id="email" name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4"><label htmlFor="message"
                                                                  className="leading-7 text-sm text-gray-600">Сообщение</label><textarea
                                id="message" name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button
                                className="btn btn-first border-white border-2 bg-white text-colorPrimary">Отправить
                            </button>
                           </div>
                    </div>
                </section>
            </div>
        </>
);
}
export default AboutPage;