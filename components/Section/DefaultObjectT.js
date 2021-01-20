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