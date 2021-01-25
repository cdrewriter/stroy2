import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useGraphQL } from "graphql-react";
import Layout from "../../templates/layoutinner";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Section from "../../components/Section/Section";
import Container from '../../components/Container/Container';
import Fullpage from "../../components/Fullpage/Fullpage";
import Asiden from "../../components/aside/Asiden";
//import SectionUslugi from "../../components/sections/SectionUslugi";


const UslugiPage = () => {
  const { query } = useRouter();
  const { slug } = query;

  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${
        process.browser ? "" : "http://localhost:3000"
      }/admin/api`;
    },
    operation: {
      query: /* GraphQL */ `
      query  {
        allUslugis {
       id
          url
          name
          description
          content
      
          image {
            publicUrl
          }
          content
        }
        }    
      

      `,
      variables: {
       
      },
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  const { cacheValue } = result;

  if (cacheValue && cacheValue.data) {
    const { allUslugis } = cacheValue.data;
    let chdata = allUslugis._bindCache;
    console.log(allUslugis.length)
    if (!allUslugis.length) {
      // When post is not found
      return "Not found";
    }
    const Items = [];
    //console.log(items.length)
    if (allUslugis && allUslugis.length) {
      for (let i = 0; i < allUslugis.length; ++i) {



        // console.log(items[i].image);
        Items.push(
            <Fullpage key={allUslugis[i].id} post={allUslugis[i]} />
        );
      }
    }


    return (
      <Layout >
        <Section className="section-top  md:pr-12 pl-24 pr-24 mb-24 h-screen full-height">

            <div className=" w-full bg-white bg-contain rounded"
                 style={{backgroundImage: 'url(/img/svarka.jpg)', height: '45vh'}}>
              <div className="text-center pt-8 md:pt-12">
                <Breadcrumbs page={allUslugis} />
                <h1 className="font-bold break-normal text-3xl md:text-5xl">Строительные услуги</h1>
              </div>
            </div>
<div className="flex">
          <Asiden catitems={allUslugis} />

            <div className="w-full lg:w-4/5 px-6 -mt-32">

              <div className="mx-0 sm:mx-6">

                <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">


                  <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">



                    <section className="w-full lg:w-4/5">


                      <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
                        Multi Section Form with Scrollspy
                      </h1>


                      <hr className="bg-gray-300 my-12"/>


                        <h2 id='section1'
                            className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Section 1</h2>


                        <div className="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white">
                          <li>Using the CDN version of <a className="underline text-yellow-600"
                                                          href="https://github.com/tailwindcss/custom-forms"
                                                          target="_blank">Tailwind Custom Forms</a></li>
                          <li>This template uses jQuery for scrollspy</li>
                        </div>



                        <hr className="bg-gray-300 my-12"/>


                          <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Section
                            2</h2>


                          <div id='section2' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                            <form>

                              <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                  <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                                         htmlFor="my-textfield">
                                    Text Field
                                  </label>
                                </div>
                                <div className="md:w-2/3">
                                  <input className="form-input block w-full focus:bg-white" id="my-textfield"
                                         type="text" value=""/>
                                    <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
                                </div>
                              </div>

                              <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                  <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                                         htmlFor="my-select">
                                    Drop down field
                                  </label>
                                </div>
                                <div className="md:w-2/3">
                                  <select name="" className="form-select block w-full focus:bg-white" id="my-select">
                                    <option value="Default">Default</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                  </select>

                                  <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
                                </div>
                              </div>

                              <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                  <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                                         htmlFor="my-textarea">
                                    Text Area
                                  </label>
                                </div>
                                <div className="md:w-2/3">
                                  <textarea className="form-textarea block w-full focus:bg-white" id="my-textarea"
                                            value="" rows="8"></textarea>
                                  <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
                                </div>
                              </div>

                              <div className="md:flex md:items-center">
                                <div className="md:w-1/3"></div>
                                <div className="md:w-2/3">
                                  <button
                                      className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                      type="button">
                                    Save
                                  </button>
                                </div>
                              </div>
                            </form>

                          </div>
                                <hr className="bg-gray-300 my-12"/>


                            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Section
                              3</h2>


                            <div id='section3' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                              <form>

                                <div className="md:flex mb-6">
                                  <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                                           htmlFor="my-multiselect">
                                      Multi Select
                                    </label>
                                  </div>
                                  <div className="md:w-2/3">
                                    <select className="form-multiselect block w-full" multiple id="my-multiselect">
                                      <option>Option 1</option>
                                      <option>Option 2</option>
                                      <option>Option 3</option>
                                      <option>Option 4</option>
                                      <option>Option 5</option>
                                    </select>
                                    <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
                                  </div>
                                </div>

                                <div className="md:flex md:items-center">
                                  <div className="md:w-1/3"></div>
                                  <div className="md:w-2/3">
                                    <button
                                        className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                        type="button">
                                      Save
                                    </button>
                                  </div>
                                </div>
                              </form>

                            </div>

                            <hr className="bg-gray-300 my-12"/>


                              <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Section
                                4</h2>


                              <div id='section4' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                                <form>

                                  <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                      <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                                             htmlFor="my-radio">
                                        Radio Buttons
                                      </label>
                                    </div>
                                    <div className="md:w-2/3">
                                      <div className="mt-2">
                                        <label className="inline-flex items-center">
                                          <input type="radio" className="form-radio text-indigo-600" name="radioOption"
                                                 value="A"/>
                                            <span className="ml-2">Radio A</span>
                                        </label>
                                        <label className="inline-flex items-center ml-6">
                                          <input type="radio" className="form-radio" name="radioOption" value="B"/>
                                            <span className="ml-2">Radio B</span>
                                        </label>
                                      </div>
                                      <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
                                    </div>
                                  </div>

                                  <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                      <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                                             htmlFor="my-checkbox">
                                        Checkboxes
                                      </label>
                                    </div>
                                    <div className="md:w-2/3">
                                      <div>
                                        <label className="inline-flex items-center">
                                          <input type="checkbox" className="form-checkbox text-indigo-600" checked/>
                                            <span className="ml-2">Option 1</span>
                                        </label>
                                      </div>
                                      <div>
                                        <label className="inline-flex items-center">
                                          <input type="checkbox" className="form-checkbox text-green-500" checked/>
                                            <span className="ml-2">Option 2</span>
                                        </label>
                                      </div>
                                      <div>
                                        <label className="inline-flex items-center">
                                          <input type="checkbox" className="form-checkbox text-pink-600" checked/>
                                            <span className="ml-2">Option 3</span>
                                        </label>
                                      </div>
                                      <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
                                    </div>
                                  </div>

                                  <div className="md:flex md:items-center">
                                    <div className="md:w-1/3"></div>
                                    <div className="md:w-2/3">
                                      <button
                                          className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                          type="button">
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </form>

                              </div>



                              <hr className="bg-gray-300 my-12"/>


                                <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Section
                                  5</h2>


                                <div id='section5' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                                  <blockquote className="border-l-4 border-yellow-600 italic my-4 pl-8 md:pl-12">Final
                                    confirmation disclaimer message etc
                                  </blockquote>

                                  <div className="pt-8">

                                    <button
                                        className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4"
                                        type="button">
                                      Save
                                    </button>

                                    <button
                                        className="shadow bg-yellow-100 hover:bg-yellow-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded mr-4"
                                        type="button">
                                      Additional Action
                                    </button>

                                    <button
                                        className="shadow bg-yellow-100 hover:bg-yellow-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded"
                                        type="button">
                                      Additional Action
                                    </button>

                                  </div>

                                </div>


                    </section>

                    <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-600 px-4 py-24 mb-12">
                      <span className="text-base text-yellow-600 font-bold">&lt;</span> <a href="#"
                                                                                           className="text-base md:text-sm text-yellow-600 font-bold no-underline hover:underline">Back
                      link</a>
                    </div>

                  </div>

                </div>

                <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">


                  <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                      <div className="-my-8 divide-y-2 divide-gray-100">
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                          </div>
                          <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat
                              fashion axe chia unicorn</h2>
                            <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel
                              vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag
                              selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft
                              beer.</p>
                            <a className="text-blue-500 inline-flex items-center mt-4">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                   fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                          </div>
                          <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick
                              direct trade taxidermy shaman</h2>
                            <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel
                              vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag
                              selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft
                              beer.</p>
                            <a className="text-blue-500 inline-flex items-center mt-4">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                   fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                            <span className="text-sm text-gray-500">12 Jun 2019</span>
                          </div>
                          <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse
                              drinking vinegar salvia</h2>
                            <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel
                              vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag
                              selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft
                              beer.</p>
                            <a className="text-blue-500 inline-flex items-center mt-4">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                   fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>


                </div>
                {Items}


              </div>


            </div>

</div>


        </Section>

       
      </Layout>
    );
  }

  return "Loading...";
};

UslugiPage.propTypes = {};

export default UslugiPage;
