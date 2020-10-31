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

const Main = () => {
  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${
        process.browser ? "" : "http://localhost:3000"
      }/admin/api`;
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
                publicUrl
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
            publicUrl
          }
        }
        allBuildObjects(first: 5) {
          id
          title
          description
          image {
            publicUrl
          }
        }

        Construction(where: { id: "5f8bfb9c26a9e12f34c9f4cd" }) {
          id
          title
          subtext
          description
          image {
            publicUrl
          }
        }
        allConstructionItems {
          id
          name
          image {
            publicUrl
          }
        }
        allConstructionPortfolios(first: 4) {
          title
          description
          title__text
          image {
            publicUrl
          }
          publishedDate
          images {
            images {
              image {
                publicUrl
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
            publicUrl
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
      allUslugis
    } = cacheValue.data;
    return (
      <>
        <Head>
          <title>Appssss</title>
        </Head>
        <MainSection title={Main.title} titleText={Main.subtext} />
        <AboutSection about={About} />
        <FeedbackSection />
        <SmallBuildSection smallbuild={SmallBuild} />
        <Carous data={allBuildObjects} />
    <ConstructionSection data={Construction} items={allConstructionItems} />
        <PortfolioSection items={allConstructionPortfolios} />
        <UslugiSection datas={UslugiPage} items={allUslugis} />
     </>
    );
  }
  return loading ? "Загружается" : "";
};

export default Main;
