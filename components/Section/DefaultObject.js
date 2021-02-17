import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Section from "./Section";
import Container from "../Container/Container";
import Fullpage from "../Fullpage/Fullpage";
import Tabs from "../Tabs/Tabs";

DefaultObject.propTypes = {

};
// function Object(data)  {
//
//     return(
//     <>
//     <li key={data.slug} onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "text-sm text-gray-800 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
//         <span className="mb-3 cursor-pointer">{activeStatus == 3 ? "Active" : "Inactive"}</span>
//         {activeStatus == 3 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
//     </li>
//     </>
//     )
//
// }
const Itemobj = ({url, img, content, name, category}) => {
    return (
        <div  key={url} style={{gridTemplateRows: 'minmax(0,1fr)'}} className="group cardobj my-8 cardobj border-gray-100 grid grid-cols-1  gap-4 md:gap-8 lg:gap-16 md:grid-cols-3 grid-rows-none px-8 py-4 border-2 hover:border-gray-500">
            <div className="object-cover bg-gray-200 h-full w-auto row-span-2  h-48 col-span-1 bg-center objimg"
                 alt={name} loading="lazy" style={{backgroundImage:`url(${img})` }}/>
            <div className="mt-4 col-span-1 md:col-span-2 row-auto">
                <p className="text-sm font-normal text-gray-500">{category}</p>
                <h2 className="mb-2 text-xl font-semibold leading-snug">
                    <a href="#" className="hover:no-underline text-gray-700 group-hover:text-gray-900 ">{name}</a>
                </h2>

                    {content ? <p className="leading-relaxed mb-3 text-sm font-normal group-hover:text-gray-700 text-gray-500" dangerouslySetInnerHTML={{__html: `${content}`}} /> : null}


            </div>
            <a href="#" className="group hover:bg-orange-500 mb-4  hover:shadow-md btn btn-light btn-sm bg-border-gray-400 bg-gray-400 text-white group-hover:bg-border-gray-700  group-hover:bg-gray-700  group-hover:text-white">
                <span className="md:hidden text-xs group-hover:block ">Подробнее</span>
                <svg className="w-4 h-4 ml-0 group-hover:ml-2" viewBox="0 0 24 24" stroke="currentColor"
                     strokeWidth="2" fill="none" strokeLinecap="round"
                     strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                </svg>
            </a>

        </div>

    )
}
const Objects = ({state, category}) => {

    const db = state;

    const itemObj = [];

    if (db && db.length) {
        for (let i = 0; i < db.length; ++i) {

            itemObj.push(
                <Itemobj url={db[i].url} img={db[i].image.publicUrl} content={db[i].content} category={category} name={db[i].name} />
            )
        }
    }

 return itemObj

// if (data && data.length) {
//     for (i = 0; i < data.length; ++i) {
//         items.push(
//
//         )
//     }
// }
}
function DefaultObject({ defobj }) {
    const { data } = defobj;
    const img = defobj.image;

    const [url, name, content, postCategories] = defobj;

    const [activeStatus, setActiveStatus] = useState('');
    const [activeCategory, setActiveCategory] = useState('');
    const [activeTitle, setActiveTitle] = useState('');


    const Items = [];
    const ItemsPage = [];


    if (defobj && defobj.length) {
        for (let i = 0; i < defobj.length; ++i) {
            const activePage = defobj[i].posts;
            const activeCategory =
            //console.log(activePage)


            // console.log({
            //     page:
            //         {
            //             activePage
            //         }, cats:
            //         {
            //             activeStatus
            //         }
            // });
                Items.push(
                    <li key={defobj[i].url} onClick={() => (setActiveStatus(defobj[i].url), setActiveCategory(defobj[i].posts), setActiveTitle(defobj[i].title))} className={activeStatus == defobj[i].url ? "text-sm text-gray-800 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-600"}>
                        {activeStatus == defobj[i].url ? <span className="mb-3 gray-800 font-medium cursor-pointer">{defobj[i].title}</span> : <span className="shadow-sm mb-3 gray-600 font-medium cursor-pointer">{defobj[i].title}</span>}
                        {activeStatus == defobj[i].url && <div className="w-full h-px border-gray-900 border shadow-sm bg-gray-600" />}
                    </li>

            );
            ItemsPage.push(
                <Objects data={activePage} />
                );
        }
    }


    return (
        <Section className={' def-obj pt-40'}>
            <div className="box container max-w-6xl mx-auto pt-12">
                <div className="box col-span-3 ugol_b_left_top">
                    <span className="section__textShaddow">
                      {defobj.title__text}
                    </span>
                    <h2 className="section__title">Типовые решения</h2>

                    <div className="box pt-12">
                        <div className="justify-between flex-wrap hidden sm:block ">
                            <div className="xl:w-full xl:mx-0 pl-5 pr-5">
                                {/*<Tabs/>*/}
                                <ul className="flex ">

                                    {Items}


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="-my-8">

                            {activeCategory.length > 0 ? <Objects state={activeCategory}  category={activeTitle}/> : null}

                        </div>
                    </div>
                </section>


            </div>
        </Section>


    );
}

export default DefaultObject;