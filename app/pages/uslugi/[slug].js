import React from "react";

import { useRouter } from "next/router";
import { useGraphQL } from "graphql-react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Section from "../../components/Section/Section";

import Layout from "../../templates/layoutinner";
import Fullpage from "../../components/Fullpage/FullpageArticle";
import Asiden from "../../components/Aside/Asiden";

const UslugiPage = () => {

  const router = useRouter();

    console.log(router)
  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${
        process.browser ? "" : process.env.BASE_URL}/admin/api`;
    },
    operation: {
      query: /* GraphQL */ `
      query($slug: String) {
        allUslugis(where: { url: $slug }) {
       
          url
          name
          description
          content
      
          image {
            publicUrl
          }
          content
        }
        allUslugiPages {
          posts {
            name
            id
            url
          }
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
    const { allUslugis, allUslugiPages } = cacheValue.data;
    if (!allUslugis.length) {
      // When post is not found
      return "Not found";
    }
   console.log(allUslugis);
    const post = allUslugis[0];
    const { posts } = allUslugiPages[0].posts;
    //const postCategory = post.allUslugiPages[0];

    return (

        <Layout post={allUslugis} catitems={allUslugiPages[0].posts}>
            <Section className="section-top  md:pr-12 pl-24 pr-24 mb-24 h-screen full-height" background={post.image.publicUrl}>

                <div className=" w-full bg-white bg-contain rounded"
                     style={{backgroundImage: 'url(/img/svarka.jpg)', height: '45vh'}}>
                    <div className="text-center pt-8 md:pt-12">
                        <Breadcrumbs page={allUslugis} />

                            <h1 className="font-bold break-normal text-3xl md:text-5xl">{post.name}</h1>
                    </div>

                    <div className="flex">
                        {console.log(allUslugis)}
                        <Asiden catitems={allUslugis} />

              <div className="container max-w-5xl mx-auto -mt-32">

                  <div className="mx-0 sm:mx-6">

                      <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">


                          <p className="text-2xl md:text-3xl mb-5">
                              👋 Welcome fellow <a
                              className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                              href="https://www.tailwindcss.com">Tailwind CSS</a> and <a
                              className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                              href="https://www.ghost.org">Ghost</a> fan. This starter template is an attempt to replicate the
                              default Ghost theme <a
                              className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                              href="https://demo.ghost.io/welcome">"Casper"</a> using Tailwind CSS and vanilla Javascript.
                          </p>

                          <p className="py-6">The basic blog page layout is available and all using the default Tailwind CSS
                              classes (although there are a few hardcoded style tags). If you are going to use this in your
                              project, you will want to convert the classes into components.</p>

                          <p className="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis
                              tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna.
                              Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim
                              lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus
                              dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean
                              pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse
                              sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia
                              nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>

                          <ol>
                              <li className="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus.
                                  Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam.
                                  Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus
                                  scelerisque tortor semper posuere.
                              </li>
                              <li className="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo.
                                  Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam
                                  lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus
                                  hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.
                              </li>
                              <li className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                  cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum
                                  velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac
                                  ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat
                                  tellus.
                              </li>
                          </ol>


                      </div>


                  </div>


              </div>
                </div>
                </div>

        </Section>

<Section >
    {post ? <Fullpage post={post} /> : null}









</Section>





        {/*<section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">*/}
        {/*  <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">*/}
        {/*    <div className="lg:w-1/2">*/}
        {/*      <div className="h-64 bg-cover lg:rounded-lg lg:h-full"*/}
        {/*           style={{backgroundImage:`url(https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80)`}}></div>*/}
        {/*    </div>*/}

        {/*  </div>*/}
        {/*</section>*/}
      </Layout>
    );
  }

  return "Loading...";
};

UslugiPage.propTypes = {};

export default UslugiPage;
