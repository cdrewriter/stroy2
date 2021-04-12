import Link from 'next/link';

const Aside = () => {
    return (
        <aside>
            <ul className={'aside_category'}>
                <li>
                    <Link href={'#'} ><a >Частные дома</a></Link>
                </li>
                <li>
                    <Link href={'#'}><a className={'active'}>Котеджи</a></Link>
                </li>
                <li>
                    <Link href={'#'}><a> Бани</a></Link>
                </li>
                <li>
                    <Link href={'#'}><a> Беседки</a></Link>
                </li>
                <li>
                    <Link href={'#'}><a>Складские помещения</a></Link>
                </li>
                <li>
                    <Link href={'#'}><a> Реконструкции</a></Link>
                </li>
                <li>
                    <Link href={'#'}><a> Производство</a></Link>
                </li>
            </ul>
        </aside>
    )
}
export default Aside;