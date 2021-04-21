import React from "react";

import { useRouter } from "next/router";
import { useGraphQL } from "graphql-react";
import Layout from "../../templates/layout";

import ProjectCard from "../../templates/ProjectCard/ProjectCard";


const UslugiPage = () => {
  const  router  = useRouter();

  const slug = '';

  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${
          process.browser ? "" : "http://localhost:3000"
      }/admin/api`;
    },
    operation: {
      query: /* GraphQL */ `
    query ($slug: String) {
         allUslugis(where: { postCategories_every: { url: $slug } }) {
            url
            name
            id
            subName
            description
            descriptionShort
            images {
              images {
                image {
                  publicUrl
                }
              }
            }

    description
    descriptionShort
    price
  }
   allUslugiPages {
    id
    title
    url
    image {
      publicUrl
    }    
  }
}


      `,
      variables: {
        slug,
      },
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  const { cacheValue } = result;
// console.log(result.cacheValue)
  if (cacheValue && cacheValue.data) {
    const { allUslugiPages, allUslugis } = cacheValue.data;
    let chdata = allUslugiPages._bindCache;
   console.log(allUslugis.length)
    if (!allUslugiPages.length) {
      // When post is not found
      return "Not found";
    }
    const Items = [];
    //console.log(items.length)
    if (allUslugiPages && allUslugiPages.length) {
      for (let i = 0; i < allUslugiPages.length; ++i) {



        // console.log(items[i].image);
        Items.push(
            <ProjectCard/>
        );
      }
    }


    return (
        <Layout asideOn={true}  catitems={allUslugiPages}>
          <div className={'header'}>
            <span className={'UPheading'}>КОММЕРЧЕСzКОГО/НАЗНАЧЕНИЯ</span>
            <h1>Строительство</h1>
          </div>
          <div className={'content'}>
            <strong>отзывы</strong> довольных клиентов -
            <strong> подтверждение</strong> нашей <strong>репутации</strong>
          </div>
          {Items}
        </Layout>

    );
  }

  return "Loading...";
};

UslugiPage.propTypes = {};

export default UslugiPage;
