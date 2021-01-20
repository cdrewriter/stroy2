import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useGraphQL } from "graphql-react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Section from "../../components/Section/Section";
import Container from '../../components/Container/Container';
import Layout from "../../templates/layoutinner";
import Fullpage from '../../components/Fullpage/Fullpage';

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
        slug,
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
        <Section className="section-top" background={post.image.publicUrl}>
          <Container>
            <Breadcrumbs page={allUslugis} />
          <h1>{post.name}</h1>
          </Container>
        </Section>
        {post ? <Fullpage post={post} /> : null}


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
