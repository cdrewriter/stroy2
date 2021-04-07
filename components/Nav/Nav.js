import React, {useState} from "react";
import {Transition} from "@headlessui/react";
import PropTypes from "prop-types";
import Logo from '../logo/Logo';
import Link from "next/link";
//import styles from './Nav.module.scss';
import Dropdown from "../Dropdown/Dropdown";
import Phone from "../Phone/Phone";


export default function Nav() {
    return (
        <header className={'header_page'}>
            <Dropdown/>
            <Logo/>
            <nav>
                <ul className={'top_menu'}>
                    <li>
                        <Link replace href="/build">Строительство</Link>
                    </li>
                    <li>
                        <Link replace
                              href="/uslugi"

                        >
                            Услуги
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/objects"

                        >
                            Объекты
                        </Link></li>
                    <li>
                        <Link replace
                              href="/about"

                        >
                            Контакты
                        </Link></li>
                </ul>
            </nav>
            <Phone />
        </header>

    );
}
