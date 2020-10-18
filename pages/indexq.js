import Head from "next/head";
import Section from "../components/Section/Section";
import { useGraphQL } from "graphql-react";
import MainSection from "../components/Section/Main";
import AboutSection from "../components/Section/About";
import FeedbackSection from "../components/Section/Feedback";
import SmallBuildSection from "../components/Section/SmallBuild";
import Carous from "../components/Carousel/Carousel";
import { ssr } from 'graphql-react/server';
import ReactDOMServer from 'react-dom/server';
import { MainQuery, AboutQuery, allBuildObjectsQuery, SmallBuildQuery } from '../queries/all';


const Main = ({props}) => {
  console.log(props)
  const query = [MainQuery, AboutQuery, allBuildObjectsQuery];
  const operation = React.useMemo(
    () => ({
      query,      
    }), 
  );

  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${
        process.browser ? "" : "http://localhost:3000"
      }/admin/api`;
    },operation,
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });
  const { loading, cacheValue } = result;
  console.log(result)
  if (cacheValue && cacheValue.data) {
    const { Main, About, SmallBuild, allBuildObjects } = cacheValue.data;
    return (
      <>
        <Head>
          <title>Appssss</title>
        </Head>
        <MainSection title={Main.title} titleText={Main.title__text}/>
        <AboutSection about={About} />
        <FeedbackSection />
        <SmallBuildSection  smallbuild={SmallBuild} />
        <Carous  data={allBuildObjects}/>      
      </>
    );
  }
  return loading ? "Загружается" : "";
};

export default Main;
