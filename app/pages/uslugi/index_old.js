import React from "react";

import { useRouter } from "next/router";
import { useGraphQL } from "graphql-react";
import Layout from "../../templates/layoutinner";

import Fullpage from "../../components/Fullpage/FullpageArticle";


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
      <Layout catitems={allUslugis}>


                        {Items}


      </Layout>
    );
  }

  return "Loading...";
};

UslugiPage.propTypes = {};

export default UslugiPage;
