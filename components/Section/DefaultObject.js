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

const Objects = ({state, category}) => {

    const db = state;
    console.log(state)
    const itemObj = [];

    if (db && db.length) {
        for (let i = 0; i < db.length; ++i) {
            itemObj.push(
                <div key={db[i].url} className="py-8 flex  flex-wrap md:flex-no-wrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">{db[i].name}</span>
                        <span className="mt-1 text-gray-500 text-sm">{category}</span>
                    </div>
                    <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{db[i].name} </h2>
                        {db[i].content ? <p className="leading-relaxed" dangerouslySetInnerHTML={{__html: `${db[i].content}`}} /> : null}
                        <a className="text-indigo-500 inline-flex items-center mt-4">Перейти к деталям
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                 stroke-width="2" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

            )
        }
    }

 return (
     <div key={'objects'}>{itemObj}</div>
 )
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
                    <li onClick={() => (setActiveStatus(defobj[i].url), setActiveCategory(defobj[i].posts), setActiveTitle( defobj[i].title))} className={activeStatus == defobj[i].url ? "text-sm text-gray-800 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                        <span className="mb-3 cursor-pointer">{activeStatus == defobj[i].url ? defobj[i].title : defobj[i].title}</span>
                        {activeStatus == defobj[i].url && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                    </li>

            );
            ItemsPage.push(
                <Objects data={activePage} />


            );
        }
    }


    return (
        <Section className={' def-obj py-40'}>
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
                    <div className="container px-5 py-24 mx-auto">
                        <div className="-my-8 divide-y-2 divide-gray-100">

                            {activeCategory.length ? <Objects state={activeCategory} category={activeTitle}/> : null}

                        </div>
                    </div>
                </section>


            </div>
        </Section>


    );
}

export default DefaultObject;