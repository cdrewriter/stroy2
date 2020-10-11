import Head from "next/head";
import Section from "../components/Section/Section";
import { useGraphQL } from "graphql-react";
import MainSection from "../components/Section/Main";
import AboutSection from "../components/Section/About";
import FeedbackSection from "../components/Section/Feedback";
import SmallBuildSection from "../components/Section/SmallBuild";

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
          photos {
            images {
              image {
                publicUrl
              }
            }
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
    const { Main, About, SmallBuild } = cacheValue.data;
    return (
      <>
        <Head>
          <title>Appssss</title>
        </Head>
        <MainSection key="main" title={Main.title} titleText={Main.title__text}/>
        <AboutSection key="about" about={About} />
        <FeedbackSection key="feedback" />
        <SmallBuildSection key="smallbuild" smallbuild={SmallBuild} />        
      </>
    );
  }
  return loading ? "Загружается" : "";
};

export default Main;
