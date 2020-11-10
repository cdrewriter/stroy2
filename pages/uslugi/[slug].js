import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useGraphQL } from "graphql-react";
import UslugiDetail from "../../components/fullpage/fullpage";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Section from "../../components/Section/Section";
import Container from '../../components/Container/Container';
import SectionUslugi from "../../components/sections/SectionUslugi";
import Aside from "../../components/Aside/Aside";

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
      query Uslugi($slug: UslugiWhereInput) {
        allUslugis(where: $slug) {
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
        slug: { url: slug },
      },
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  const { cacheValue } = result;
  if (cacheValue && cacheValue.data) {
    const { allUslugis, UslugiAll } = cacheValue.data;
    if (!allUslugis.length) {
      // When post is not found
      return "Not found";
    }
   console.log(UslugiAll);
    const post = allUslugis[0];
    //const postCategory = post.allUslugiPages[0];

    return (
      <>
        <Section className="section-top" background={post.image.publicUrl}>
          <Container>
            <Breadcrumbs page={allUslugis} />
          <h1>{post.name}</h1>
          </Container>
        </Section>
        <Aside items={UslugiAll} />
        <SectionUslugi>
          <UslugiDetail post={post} />
        </SectionUslugi>
      </>
    );
  }

  return "Loading...";
};

UslugiPage.propTypes = {};

export default UslugiPage;
