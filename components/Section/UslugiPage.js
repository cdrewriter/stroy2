import Section from "./Section";
import style from "./UslugiPage.module.scss";
import Fullpage from "../Fullpage/Fullpagev2";
import Layout from "../../templates/layoutinner";
import React from "react";

export default function UslugiSection({datas, items}) {
    const {data} = datas;
    const {photos} = items;
    const priceItems = [];

    if (items && items.length) {
        for (let i = 0; i < items.length; ++i) {
            //const { image } = items[i].photos;
            //console.log(items[i].image);
            priceItems.push(
                <Fullpage key={i} post={items[i]}/>
            );
        }
    }
    return (
        <Section className="bd my-12 uslugi-page py-20 lg:py-40">
            <div className="mx-auto block__custom mt-12">
                <div className="box  grid items-stretch">
                    <div className="block__title">
                        <h2 className="section__title">{datas.title}</h2>
                    </div>
                    <div className="block__desc">
                        {datas.description}
                    </div>

                    <div className="short_uslugi grid  gap-12">
                        <div className={'build-img'}><img src='house1.png'/></div>
                        {priceItems}</div>

                </div>


            </div>
        </Section>
    );
}
