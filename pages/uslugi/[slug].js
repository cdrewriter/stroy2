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
      
      </Layout>
    );
  }

  return "Loading...";
};

UslugiPage.propTypes = {};

export default UslugiPage;
