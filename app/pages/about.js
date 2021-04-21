import Head from "next/head";
import { useGraphQL } from "graphql-react";
import MainSection from "../components/Section/Main";
import AboutSection from "../components/Section/About";
import FeedbackSection from "../components/Section/Feedback";
import SmallBuildSection from "../components/Section/SmallBuild";
import Carous from "../components/Carousel/Carousel";
import ConstructionSection from "../components/Section/Construction";
import PortfolioSection from "../components/Section/Portfolio";
import UslugiSection from "../components/Section/UslugiPage";
import Layout from "../templates/layout";
import DefaultObject from "../components/Section/DefaultObjectT";
import AboutPage from "../components/About/About";

const About = () => {
  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${process.browser ? "" : "http://localhost:3000"}/admin/api`;
    },
    operation: {
      query: /* GraphQL */ `
      query {
        Main(where: { id: "5f7ef4dbd3ec864484349860" }) {
          title
          subtext
        }
        About(where: { id: "5f80cb377a316844809ecec2" }) {
          title
          title__text
          description
          photos {
            images {
              image {
                publicUrlTransformed(transformation: {transformation: "webp", fetch_format: "webp"}) 
              }
            }
          }
          image {
            publicUrl
          }
        }
        SmallBuild(where: { id: "5f81b62e6e425c535ca01916" }) {
          id
          title
          title__text
          description
          image {
            publicUrlTransformed(transformation: {transformation: "webp", fetch_format: "webp"}) 
          }
        }
        allBuildObjects(first: 5) {
          id
          title
          description
          image {
            publicUrlTransformed(transformation: {transformation: "webp", fetch_format: "webp"}) 
          }
        }

        Construction(where: { id: "5f8bfb9c26a9e12f34c9f4cd" }) {
          id
          title
          subtext
          description
          image {
            publicUrlTransformed(transformation: {transformation: "webp", fetch_format: "webp"}) 
          }
        }

  DefObjPage(where: {id: "6000c1994f403c398ccab65e"}) {
    title
  }

        allConstructionItems {
          id
          name
          image {
            publicUrlTransformed(transformation: {transformation: "webp", fetch_format: "webp"}) 
          }
        }
        allConstructionPortfolios(first: 4) {
          title
          id
          description
          title__text
          image {
            publicUrlTransformed(transformation: {transformation: "webp", fetch_format: "webp"}) 
          }
          publishedDate
          images {
            images {
              image {
                publicUrlTransformed(transformation: {transformation: "webp", fetch_format: "webp"}) 
              }
            }
          }
        }
        UslugiPage(where: {id: "5f98c36d370fea1fd0490feb"})
        {
          id
          title
          url
          description
        }
        allUslugis {
          id
          name
          postCategories {
            id
            title
            url
          }
          description
          content
          image {
            publicUrlTransformed(transformation: {transformation: "webp", fetch_format: "webp"}) 
          }
        }
      }
      `,
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });
  const { loading, cacheValue } = result;
  if (cacheValue && cacheValue.data) {
    const {
      Main,
      About,
      SmallBuild,
      allBuildObjects,
      allConstructionItems,
      Construction,
      allConstructionPortfolios,
      UslugiPage, 
      allUslugis,
        DefObjPage
    } = cacheValue.data;
    return (
      <Layout>
        <Head>
          <title>Контакты</title>
        </Head>
        {/*<MainSection title={Main.title} titleText={Main.subtext} />*/}
        {/*<AboutSection about={About} />*/}
        {/*<FeedbackSection />*/}
        {/*<SmallBuildSection smallbuild={SmallBuild} />*/}
        {/*<Carous data={allBuildObjects} />*/}

        {/*<ConstructionSection data={Construction} items={allConstructionItems} />*/}
        {/*<PortfolioSection items={allConstructionPortfolios} />*/}
        <AboutPage />

     </Layout>
    );
  }
  return loading ? "Загружается" : "";
};

export default About;
