import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Section from "./Section";

DefaultObject.propTypes = {

};

function DefaultObject({ defobj }) {
    const { data } = defobj;
    const img = defobj.image;
    const [activeStatus, setActiveStatus] = useState(1);
    return (
        <Section className={'def-obj'}>
        <div className="box col-span-3 ugol_b_left_top">
                <span className="section__textShaddow">
                  {defobj.title__text}
                </span>
            <h2 className="section__title">{defobj.title}</h2>



            <div className="box py-12">
                <div className="sm:hidden relative w-11/12 mx-auto bg-white rounded">
                    <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="8 9 12 5 16 9" />
                            <polyline points="16 15 12 19 8 15" />
                        </svg>
                    </div>
                    <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                        <option className="text-sm text-gray-600">inactive </option>
                        <option className="text-sm text-gray-600">inactive </option>
                        <option selected className="text-sm text-gray-600">
                            Active{" "}
                        </option>
                        <option className="text-sm text-gray-600">inactive </option>
                        <option className="text-sm text-gray-600">inactive </option>
                    </select>
                </div>





            <div class="bg-white">
                <nav class="flex flex-col sm:flex-row">
                    <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                        Tab 1
                    </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    Tab 2
                </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    Tab 3
                </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    Tab 4
                </button>
                </nav>
            </div>
            <div className="justify-between flex-wrap hidden sm:block bg-white rounded shadow">
                <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
                    <ul className="flex">
                        <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "text-sm text-gray-800 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                            <span className="mb-3 cursor-pointer">{activeStatus == 1 ? "Active" : "Inactive"}</span>
                            {activeStatus == 1 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                        <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "text-sm text-gray-800 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                            <span className="mb-3 cursor-pointer">{activeStatus == 2 ? "Active" : "Inactive"}</span>
                            {activeStatus == 2 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                        <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "text-sm text-gray-800 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                            <span className="mb-3 cursor-pointer">{activeStatus == 3 ? "Active" : "Inactive"}</span>
                            {activeStatus == 3 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                        <li onClick={() => setActiveStatus(4)} className={activeStatus == 4 ? "text-sm text-gray-800 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                            <span className="mb-3 cursor-pointer">{activeStatus == 4 ? "Active" : "Inactive"}</span>
                            {activeStatus == 4 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </Section>


    );
}

export default DefaultObject;