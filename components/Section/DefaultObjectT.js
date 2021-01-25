import React, {useState, setState} from 'react';
import PropTypes from 'prop-types';
import Section from "./Section";

DefaultObject.propTypes = {

};

function DefaultObject({ defobj }) {
    const { data } = defobj;
    const img = defobj.image;
    const [cartOpenStatus, setCartOpenStatus] = useState(false);

    return (
        <Section className={'def-obj'}>

            <div className=" def-obj py-40">
                <div className="box container max-w-4xl mx-auto py-12">
                    <div className="box col-span-3 ugol_b_left_top"><span className="section__textShaddow"></span><h2
                        className="section__title">Типовые решения</h2></div>
                    <div className="sm:hidden relative w-11/12 mx-auto bg-white rounded">
                        <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector"
                                 width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0"
                                 fill="none" stroke-linecap="round" stroke-linejoin="round" >
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <polyline points="8 9 12 5 16 9"></polyline>
                                <polyline points="16 15 12 19 8 15"></polyline>
                            </svg>
                        </div>
                        <select aria-label="Selected tab"
                                className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                            <option className="text-sm text-gray-600">inactive</option>
                            <option className="text-sm text-gray-600">inactive</option>
                            <option className="text-sm text-gray-600">Active</option>
                            <option className="text-sm text-gray-600">inactive</option>
                            <option className="text-sm text-gray-600">inactive</option>
                        </select></div>
                    <nav className="sm:flex sm:justify-center sm:items-center mt-4 flex flex-col sm:flex-row">
                        <button
                            className="text-gray-600 py-4 px-6 block text-orange-500 hover:text-orange-600 focus:outline-none  border-b-2 font-medium border-orange-500">Tab
                            1
                        </button>
                        <button className="text-gray-600 py-4 px-6 block hover:text-orange-600 focus:outline-none">Tab
                            2
                        </button>
                        <button className="text-gray-600 py-4 px-6 block hover:text-orange-600 focus:outline-none">Tab
                            3
                        </button>
                        <button className="text-gray-600 py-4 px-6 block hover:text-orange-600 focus:outline-none">Tab
                            4
                        </button>
                    </nav>
                    <div className="bg-white hidden">
                        <nav className="flex flex-col sm:flex-row">
                            <button
                                className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">Tab
                                1
                            </button>
                            <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">Tab
                                2
                            </button>
                            <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">Tab
                                3
                            </button>
                            <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">Tab
                                4
                            </button>
                        </nav>
                    </div>
                </div>
                <div className="Container_container__1UmhU">
                    <div className="justify-between flex-wrap sm:block  rounded ">
                        <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
                            <ul className="flex   px-40">
                                <li className="text-sm text-gray-800 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal">
                                    <span className="mb-3 cursor-pointer">Active</span>
                                    <div className="w-full h-1 bg-indigo-700 rounded-t-md"></div>
                                </li>
                                <li className="text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800">
                                    <span className="mb-3 cursor-pointer">Inactive</span></li>
                                <li className="text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800">
                                    <span className="mb-3 cursor-pointer">Inactive</span></li>
                                <li className="text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800">
                                    <span className="mb-3 cursor-pointer">Inactive</span></li>
                            </ul>
                            <div className="bg-white px-32 grid">
                                <section className="text-gray-600 body-font">
                                    <div className="px-5 py-24 ">
                                        <div className="-my-8 divide-y-2 divide-gray-100">
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters
                                                    hashtag waistcoat fashion axe chia unicorn</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                            <div className="py-8 flex flex-nowrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation
                                                    bushwick direct trade taxidermy shaman</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="text-sm text-gray-500">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Woke
                                                    master cleanse drinking vinegar salvia</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="text-gray-600 body-font overflow-hidden">
                                    <div className="container px-5 py-24 mx-auto">
                                        <div className="-my-8 divide-y-2 divide-gray-100">
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters
                                                    hashtag waistcoat fashion axe chia unicorn</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation
                                                    bushwick direct trade taxidermy shaman</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="text-sm text-gray-500">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Woke
                                                    master cleanse drinking vinegar salvia</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    <div className="my-8 py-32">
        <div className="container mx-auto px-6">
            <div className="box ugol_b_left_top">
                <span className="section__textShaddow">
                  {defobj.title__text}
                </span>
                <h2 className="section__title">{defobj.title}</h2>




            </div>
            <nav className={cartOpenStatus ? '' : 'hidden'} className="sm:flex sm:justify-center sm:items-center mt-4 flex flex-col sm:flex-row">

                <button className="text-gray-600 py-4 px-6 block text-orange-500 hover:text-orange-600 focus:outline-none  border-b-2 font-medium border-orange-500">
                    Tab 1
                </button><button className="text-gray-600 py-4 px-6 block hover:text-orange-600 focus:outline-none">
                Tab 2
            </button><button className="text-gray-600 py-4 px-6 block hover:text-orange-600 focus:outline-none">
                Tab 3
            </button><button className="text-gray-600 py-4 px-6 block hover:text-orange-600 focus:outline-none">
                Tab 4
            </button>

            </nav>


            <div className=" def-obj py-40">
                <div className="box container max-w-4xl mx-auto py-12">
                    <div className="box col-span-3 ugol_b_left_top">
                        <span className="section__textShaddow"></span><h2
                        className="section__title">Типовые решения</h2>
                    </div>


                </div>
                <div className="Container_container__1UmhU">
                    <div className="justify-between flex-wrap sm:block  rounded ">
                        <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
                            <ul className="flex   px-40">
                                <li className="text-sm text-gray-800 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal">
                                    <span className="mb-3 cursor-pointer">Active</span>
                                    <div className="w-full h-1 bg-indigo-700 rounded-t-md"></div>
                                </li>
                                <li className="text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800">
                                    <span className="mb-3 cursor-pointer">Inactive</span></li>
                                <li className="text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800">
                                    <span className="mb-3 cursor-pointer">Inactive</span></li>
                                <li className="text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800">
                                    <span className="mb-3 cursor-pointer">Inactive</span></li>
                            </ul>
                            <div className="bg-white px-32 grid">
                                <section className="text-gray-600 body-font">
                                    <div className="px-5 py-24 ">
                                        <div className="-my-8 divide-y-2 divide-gray-100">
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters
                                                    hashtag waistcoat fashion axe chia unicorn</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                            <div className="py-8 flex flex-nowrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation
                                                    bushwick direct trade taxidermy shaman</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="text-sm text-gray-500">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Woke
                                                    master cleanse drinking vinegar salvia</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="text-gray-600 body-font overflow-hidden">
                                    <div className="container px-5 py-24 mx-auto">
                                        <div className="-my-8 divide-y-2 divide-gray-100">
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters
                                                    hashtag waistcoat fashion axe chia unicorn</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="mt-1 text-gray-500 text-sm">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation
                                                    bushwick direct trade taxidermy shaman</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"><span
                                                    className="font-semibold title-font text-gray-700">CATEGORY</span><span
                                                    className="text-sm text-gray-500">12 Jun 2019</span></div>
                                                <div className="md:flex-grow"><h2
                                                    className="text-2xl font-medium text-gray-900 title-font mb-2">Woke
                                                    master cleanse drinking vinegar salvia</h2><p
                                                    className="leading-relaxed">Glossier echo park pug, church-key
                                                    sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.
                                                    Marfa 3 wolf moon party messenger bag selfies, poke vaporware
                                                    kombucha lumbersexual pork belly polaroid hoodie portland craft
                                                    beer.</p><a
                                                    className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24"
                                                         stroke="currentColor" stroke-width="2" fill="none"
                                                         stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


                <div>
                    <div className="bannerFondo bg-green-800	bg-left-top bg-auto bg-repeat-x" style={{background: '#e2e2e2'}}>
                    </div>

                    <div className="mt-32 ">
<div className="container mx-auto">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">

                            <div className="p-2 sm:p-10 text-center cursor-pointer">
                                <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                                    <div className="space-y-10">
                                        <i className="fa fa-spa"  style={{fontSize:'48px'}}></i>

                                        <div className="px-6 py-4">
                                            <div className="space-y-5">
                                                <div className="font-bold text-xl mb-2">Spa</div>
                                                <p className="text-gray-700 text-base">
                                                    Todo tipo de masajes y técnicas
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 sm:p-10 text-center cursor-pointer text-white">
                                <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition duration-500">
                                    <div className="space-y-10">
                                        <i className="fa fa-head-side-mask" style={{fontSize:'48px'}}></i>
                                        <div className="px-6 py-4">
                                            <div className="space-y-5">
                                                <div className="font-bold text-xl mb-2">Bioseguridad</div>
                                                <p className="text-base">
                                                    Altos estandares de bioseguridad
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
                                <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                                    <div className="space-y-10">
                                        <i className="fa fa-swimmer"  style={{fontSize:'48px'}}></i>

                                        <div className="px-6 py-4">
                                            <div className="space-y-5">
                                                <div className="font-bold text-xl mb-2">Piscina</div>
                                                <p className="text-gray-700 text-base">
                                                    Piscina temperada
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
</div>
                    </div>

                </div>



        </Section>


    );
}

export default DefaultObject;