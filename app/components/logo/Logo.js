import Link from 'next/link';
const LogoImg = () => {
    return (
        <Link href="/" ariaLabel="Home">
        <svg id="svg_logo" xmlns="http://www.w3.org/2000/svg" width="180" height="31" viewBox="0 0 145 31">
            <text id="СтройЭксперт" transform="translate(0 25)" fill="#14213d" fontSize="32" fontFamily="HeadingCompressedPro-ExtBd, Heading Pro"><tspan x="0" y="0">СтройЭксперт</tspan></text>
        </svg>
        </Link>

    )
}

export default function Logo() {
    return (
        <div className="logo">

        <LogoImg />

            <hr className="hidden lg:block"/>
            <span className="slogan hidden lg:block">строительная компания</span>
        </div>
    );
};
