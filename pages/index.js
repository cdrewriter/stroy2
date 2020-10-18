import Head from "next/head";
import Section from "../components/Section/Section";
import { useGraphQL } from "graphql-react";
import MainSection from "../components/Section/Main";
import AboutSection from "../components/Section/About";
import FeedbackSection from "../components/Section/Feedback";
import SmallBuildSection from "../components/Section/SmallBuild";
import Carous from "../components/Carousel/Carousel";
import ConstructionSection from "../components/Section/Construction";

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
          title__text
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
      }
      
      `,
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });
  const { loading, cacheValue } = result;
  if (cacheValue && cacheValue.data) {
    const { Main, About, SmallBuild, allBuildObjects } = cacheValue.data;
    return (
      <>
        <Head>
          <title>Appssss</title>
        </Head>
        {/*<MainSection title={Main.title} titleText={Main.title__text}/>
        <AboutSection about={About} />
        <FeedbackSection />
    <SmallBuildSection  smallbuild={SmallBuild} />*/}
        <Carous  data={allBuildObjects}/>     
        <ConstructionSection data={ConstructionSection}/> 
      </>
    );
  }
  return loading ? "Загружается" : "";
};

export default Main;