import Link from 'next/link';
import { useRouter } from 'next/router'

function Aside(catitems) {
    // const router = useRouter()
    console.group('New');
    // console.log(router.pathname)
    console.groupEnd();
    const linkCategory = [];
    if (!catitems.content) {

        for (let i = 0; i => catitems.content.length; i++) {
            const { title, url, id } = catitems.content[i];

            linkCategory.push(

                <li key={id}>
                    <Link href="/uslugi/[slug]" ><a >{title}</a></Link>
                </li>
            );
        }

    }
    const asideItems = [];

    if (catitems.content && catitems.content.length) {
        for (let i = 0; i < catitems.content.length; ++i) {


            asideItems.push(
                <li>
                    <Link query={catitems.content[i].url} href={`/uslugi/`+catitems.content[i].url}><a>{catitems.content[i].title}</a></Link>
                </li>

        )
            ;
        }
    }

    return (
        <aside>
            <ul className={'aside_category'}>
                {asideItems}
            </ul>
        </aside>
    )

}
export default Aside;