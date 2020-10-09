import Head from "next/head";
import Section from "../components/Section/Section";
import { useGraphQL } from "graphql-react";

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
        }
      `,
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });
  const { loading, cacheValue } = result;
  if (cacheValue && cacheValue.data) {
    const { Main } = cacheValue.data;
    const priceItems = [];
    {
      /* if (allItemCarCategories && allItemCarCategories.length) {
      for (let i = 0; i < allItemCarCategories.length; ++i) {
        priceItems.push(
          <>
            <BgCard key={i} post={allItemCarCategories[i]} />
          </>
        );
      }
    }*/
    }

    return (
      <>
        <Head>
          <title>Appssss</title>
        </Head>      
        <Section className="bd md:pl-24 md:pr-24 pl-8 pr-8 mb-24 h-screen">
          <div className="h-full lg:mx-auto bg-local ">
            <div className="p-4 h-full shadow bg-hero-pattern">
              <div className="container h-full  mx-auto block__custom flex flex-col">
                <div className="block__outer">
                  <div className="z-12 heading relative shadow-2xl">
                    <h1 className="leading-normal">{Main.title}</h1>
                  </div>
                  <div className="bd z-16 heading__subtitle relative w-14 shadow-xl">
                    <p className="text-white">{Main.title__text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section className="bd md:pl-24 md:pr-24 pl-8 pr-8 mb-24 h-screen">
          <div className="h-full lg:mx-auto bg-local ">
            <div className="p-4 h-full shadow-2xl bg-white">
              <div className="container h-full  mx-auto block__custom flex flex-col">
                <h2 className="section__title">Строэксперт</h2>
                <span className="section__textShaddow">О компании</span>
                <div className="block__outer">
                  <div className="z-12 heading relative shadow-2xl">
                    <h1 className="leading-normal">{Main.title}</h1>
                  </div>
                  <div className="bd z-16 heading__subtitle relative w-14 shadow-xl">
                    <p className="text-white">{Main.title__text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }
  return loading ? "Загружается" : "";
};

export default Main;
