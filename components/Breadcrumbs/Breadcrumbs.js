import Link from "next/link";
import { useRouter } from 'next/router';
import style from './BreadCrumbs.module.scss';
import Container from "../Container/Container";
import React from "react";


const BreadCrumbs = ({page}) => {
    const { query } = useRouter();
    const { slug } = query;
    const {name} = page[0];
    //console.log(name)
  return (

        <div className="text-center pt-16 md:pt-32">
            <Link href="/">
                <a className={style.breadcrumbs  + 'text-xs md:text-sm text-gray-500 font-bold'}>Главная</a>
            </Link>
            <span
                className="text-gray-900 text-2xl mx-8">/</span>
            <Link href={`/uslugi/`}>
                <a className="text-xs md:text-sm text-gray-300 font-bold">Услуги</a>
            </Link>


        </div>

  );
};

export default BreadCrumbs;
