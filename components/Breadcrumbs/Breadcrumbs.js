import Link from "next/link";
import { useRouter } from 'next/router';
import style from './BreadCrumbs.module.scss';


const BreadCrumbs = ({page}) => {
    const { query } = useRouter();
    const { slug } = query;
    const {name} = page[0];
    //console.log(name)
  return (
    <>
      <ul className={style.breadcrumbs}>
        <li>
        <Link href="/">
            <a>Главная</a>
          </Link>
        </li>
        <li>
        <Link href={`/uslugi/`}>
            <a>Услуги</a>
          </Link>
        </li>
        
      </ul>
    </>
  );
};

export default BreadCrumbs;
