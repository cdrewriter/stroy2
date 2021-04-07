import Nav from '../components/Nav/Nav'


import Footer   from "../components/Footer/Footer";
import Asiden from "../components/Aside/Asiden";
import React from "react";
import Section from "../components/Section/Section";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export default function App({ children, catitems }) {
  return (
    <div className={'inner'}>
    <Nav />
      <Section className=" bd px-6 md:px-12 lg:px-16  section-top ">

        <div className=" w-full bg-white bg-contain rounded"
             style={{backgroundImage: 'url(/img/svarka.jpg)', height: '45vh'}}>
          <div className="text-center">
            <Breadcrumbs page={catitems} />
            <h1 className="font-bold break-normal text-white text-3xl md:text-5xl">Строительные услуги</h1>
          </div>
        </div>
        <div className="flex">
      <Asiden catitems={catitems}/>


          <div className="w-full lg:w-3/4  -mt-32">


            <div className="bg-white p-16 text-gray-800 leading-normal  region-content">


              <section className="text-gray-600 body-font overflow-hidden">

                <div className=" divide-y-2 divide-gray-100">
     {children}
                </div>




              </section>




            </div>


          </div>

        </div>


      </Section>

      <Footer />
    </div>

  )
}
