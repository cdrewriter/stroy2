import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import Logo from '../logo/Logo';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="humburger">
      <div className="-mr-2 flex items-center">
        <button
          type="button"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          id="main-menu"
          aria-label="Main menu"
          aria-haspopup="true"
        >
          <svg
            className="h-6 w-6"
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
      </div>

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

export default function Nav() {
  return (
    <div className="header">
      <div className="relative z-10 lg:w-full">
        <div className="relative px-0 py-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-24 lg:justify-start">
            <div className="flex items-center">
              <div className="flex items-center justify-between">
              <Dropdown />  
                <Logo />
               
              </div>
            </div>
            <div className="hidden xl:flex lg:w-full md:pl-24 md:pr-24 pl-24 pr-8 flex-1">
              <a
                href="/build"
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Строительство
              </a>
              <a
                href="/uslugi"
                className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Услуги
              </a>
              <a
                href="/objects"
                className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Объекты
              </a>
              <a
                href="/about"
                className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                Контакты
              </a>
             </div>
            <div className="nav__icons ml-auto mr-2 md:mr-16">
              <a href="tel:+79514782780" className="my-auto text-gray-800 font-bold py-2 ml-1 rounded inline-flex items-center">
                  <svg aria-hidden="true" focusable="false" width="1em" height="1em" viewBox="0 0 24 24"><g fill=""><path d="M13 8a3 3 0 0 1 3 3a1 1 0 0 0 2 0a5 5 0 0 0-5-5a1 1 0 0 0 0 2z"/><path d="M13 4a7 7 0 0 1 7 7a1 1 0 0 0 2 0a9 9 0 0 0-9-9a1 1 0 0 0 0 2zm8.75 11.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72a3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2A4.6 4.6 0 0 0 2 6.6A15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6a4.77 4.77 0 0 0-.06-.76a4.34 4.34 0 0 0-.19-.73zM17.4 20A13.41 13.41 0 0 1 4 6.6A2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.54.28c-.86.45-1.54.81-1.18 1.59a11.85 11.85 0 0 0 7.18 7.21c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6z"/></g></svg><span className="hidden lg:block"> +7 951 478 2780</span>
              </a>
              <button className="m-auto text-gray-800 font-bold my-2 ml-1 rounded inline-flex items-center">

                  <svg aria-hidden="true" focusable="false" width="1em" height="1em"  viewBox="0 0 24 24"><path fill="#" d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75L5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2a1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/></svg>

              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
