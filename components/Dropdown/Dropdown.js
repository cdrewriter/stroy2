import React, {useState} from "react";
import {Transition} from "@headlessui/react";
import style from './Dropdown.module.scss';
function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={style.humburger}>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    id="main-menu"
                    aria-label="Main menu"
                    aria-haspopup="true"
                >
                    <svg
                        className={style.h3w3}
                        stroke="currentColor"
                        fillRule="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>


            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div
                        ref={ref}
                        className="absolute top-0 inset-x-0 p-2 z-20 transition transform origin-top-right md:hidden"
                    >
                        <div className="rounded-lg shadow-md">
                            <div
                                className="rounded-lg bg-white shadow-xs overflow-hidden"
                                role="menu"
                                ariaOrientation="vertical"
                                aria-labelledby="main-menu"
                            >
                                -
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="-mr-2 z-11">
                                        <button
                                            type="button"
                                            onClick={() => setIsOpen(false)}
                                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                            aria-label="Close menu"
                                        >
                                            <svg
                                                className="h-6 w-6"
                                                stroke="currentColor"
                                                fillRule="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3">
                                    <a
                                        href="#"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                                        role="menuitem"
                                    >
                                        Product
                                    </a>
                                    <a
                                        href="#"
                                        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                                        role="menuitem"
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#"
                                        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                                        role="menuitem"
                                    >
                                        Marketplace
                                    </a>
                                    <a
                                        href="#"
                                        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                                        role="menuitem"
                                    >
                                        Company
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                                        role="menuitem"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
}
export default Dropdown;