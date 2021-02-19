import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useGraphQL } from "graphql-react";
import Layout from "../../templates/layoutinner";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Section from "../../components/Section/Section";
import Container from '../../components/Container/Container';
import Fullpage from "../../components/Fullpage/FullpageArticle";
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
          postCategories {
            title
          }
      
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
        <Section className=" bd px-6 md:px-12 lg:px-16  section-top ">

            <div className=" w-full bg-white bg-contain rounded"
                 style={{backgroundImage: 'url(/img/svarka.jpg)', height: '45vh'}}>
              <div className="text-center">
                <Breadcrumbs page={allUslugis} />
                <h1 className="font-bold break-normal text-white text-3xl md:text-5xl">Строительные услуги</h1>
              </div>
            </div>
<div className="flex">
          <Asiden catitems={allUslugis} />

            <div className="w-full lg:w-3/4  -mt-32">

              <div className="mx-0 sm:mx-6">

                <div className="bg-white w-full  text-gray-800 leading-normal">


                  <div className="container w-full flex flex-wrap mx-auto px-2">
  
                    <section className="text-gray-600 body-font overflow-hidden">
                      <div className="container px-8  mx-auto">
                        <div className=" divide-y-2 divide-gray-100">
                        {Items}
                        </div>
                         
                        
                       
                      </div>
                    </section>


                  </div>

                </div>



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
