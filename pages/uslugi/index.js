import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useGraphQL } from "graphql-react";
import Layout from "../../templates/layoutinner";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Section from "../../components/Section/Section";
import Container from '../../components/Container/Container';
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
    if (!allUslugis.length) {
      // When post is not found
      return "Not found";
    }
  
    //console.log(slug);
    return (
      <Layout catitems={allUslugis}>
        <Section className="asidesection">
          <Container>
            <Breadcrumbs page={allUslugis} />
          <h1>Все категории</h1>
          </Container>
        </Section>
        
       
      </Layout>
    );
  }

  return "Loading...";
};

UslugiPage.propTypes = {};

export default UslugiPage;
