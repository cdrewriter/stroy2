import Section from "./Section";
import { useGraphQL } from "graphql-react";
export default function PortfolioSection() {
  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${process.browser ? "" : process.env.BASE_URL}/admin/api`;
    },
    operation: {
      query: /* GraphQL */ `
      query {
        
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

      allConstructionPortfolios,

    } = cacheValue.data;   
  const constructItems = [];
  //console.log(items.length)
  if (allConstructionPortfolios && allConstructionPortfolios.length) {
    for (let i = 0; i < allConstructionPortfolios.length; ++i) {
      const image = allConstructionPortfolios[i].image;
      const options = { year: "numeric", month: "long" };
      const odate = new Date(allConstructionPortfolios[i].publishedDate).toLocaleDateString(
        undefined,
        options
      );
      // console.log(items[i].image);
      constructItems.push(
        <div className="item" key={allConstructionPortfolios[i].id}>
      
            <img className="image" src={image.publicUrlTransformed} />
         
          <div className="heading__portfolio">
            <span>{odate}</span>
            <h3>{allConstructionPortfolios[i].title}</h3>
          </div>
        </div>
      );
    }
  }

  //console.log(constructItems)
  /*function inHtml() {
    return <div dangerouslySetInnerHTML={{ __html: `${data.description}` }} />;
  }*/
  return (
    <Section>
      <div className="portfolio">
        <div className="lg:mx-auto bg-local relative">
          <div className="p-32  bg-white">
            <div className="container h-full mx-auto block__custom mt-12 ">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="box col-span-2 ugol_b_left_top">
                  <h2 className="section__title">Наши объекты</h2>
                  {/*<div className="block__desc ugol_s_bottom_left">
                  <p>{inHtml()}</p>
                </div>*/}
                  <div className="box py-12">
                    <div className="items">{constructItems}</div>
                  </div>
                </div>
                  
                {/* Изображения<div className="image z-10 col-span-1 grid items-center">
                <img src={img.publicUrl} className="shadow-3xl"/>
  </div>*/}
              </div>
              <button className="btn btn-first mx-auto">Загрузить еще</button>
            </div>
          </div>
        </div>
      </div>
      
    </Section>
    );
  }
  return loading ? "Загружается" : "";
}
