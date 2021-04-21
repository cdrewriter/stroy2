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
import Layout from '../templates/layout';
import DefaultObject from "../components/Section/DefaultObject";
import FirstScreen from "../screens/FirstScreen/FirstScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import CategoryScreen from "../screens/CategoryScreen/CategoryScreen";
import SwiperProjects from "../components/Swiper/SwiperProjects";
import {IconArrowDown} from "../components/Buttons";
import CategoryContentQuery from '../queries/CategoryContentQuery';

const Main = () => {
  console.log(CategoryContentQuery('proektirovanie-zdanij'));
  const result = useGraphQL({

    fetchOptionsOverride(options) {
      options.url = `${process.browser ? "" : process.env.BASE_URL}/admin/api`;
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
                publicUrlTransformed(
                  transformation: { transformation: "webp", fetch_format: "webp" }
                )
              }
            }
          }
          image {
            publicUrl
          }
        }
       
        UslugiPage(where: { id: "5f98c36d370fea1fd0490feb" }) {
          id
          title
          url
          description
        }
        allUslugis {
          id
          url
          name
          description
          content      
          image {
            publicUrl
          }
          content
          postCategories {
            id
            title
            url
          }
      
          description
          content
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
      allDefObjs,
      allDefObjPages,
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
          <title>Строительная компания СтройЭксперт</title>
        </Head>
          <FirstScreen title={Main.title} titleText={Main.subtext}/>
          <AboutScreen  about={About}/>
        <CategoryScreen />

        <SwiperProjects />

        <FeedbackSection />
        {/*<SmallBuildSection smallbuild={SmallBuild} />*/}
        {/*<Carous data={allBuildObjects} />*/}
        {/*<ConstructionSection data={Construction} items={allConstructionItems} />*/}
        {/*<PortfolioSection items={allConstructionPortfolios} />*/}
        {/*<UslugiSection datas={UslugiPage} items={allUslugis} />*/}
        {/*<DefaultObject defobj={allDefObjPages} />*/}
     </Layout>
    );
  }
  return loading ? "Загружается" : "";
};

export default Main;
