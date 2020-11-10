import Section from "./Section";
import style from "./UslugiPage.module.scss";
import { useGraphQL } from "graphql-react";


export default function UslugiSection() {
  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${process.browser ? "" : "http://localhost:3000"}/admin/api`;
    },
    operation: {
      query: /* GraphQL */ `
      query {        
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
      allUslugis
    } = cacheValue.data;

  //  const { data } = datas;
 // const { photos } = datas;
  const priceItems = [];
  //console.log(items)
  if (allUslugis && allUslugis.length) {
    for (let i = 0; i < allUslugis.length; ++i) {
      //const { image } = photos.images[i];
      //console.log(image.publicUrl);
      priceItems.push(
        <div className={style.uslugi__item} key={allUslugis[i].id}>
          <img key={i} src={allUslugis[i].image} />
          <h3>{allUslugis[i].name}</h3>
          <p>
          {allUslugis[i].description}
          </p>
          <p>
          {allUslugis[i].postCategories.name}
          </p>
          <a href="#" >Далее</a>

          </div>
      );
    }
  }
    return (  
    <Section    
      className="bd my-12 full-height"
    >
      <div className="lg:mx-auto bg-local ">
        <div className="py-16 shadow-2xl bg-white">
          <div className="container mx-auto block__custom mt-12">
            <div className="grid  gap-4">
              <div className="box  grid items-stretch col-span-2">
                <div className="block__title">
                  <h2 className="section__title">{UslugiPage.title}</h2>                  
                </div>
                <div className="block__desc">
                  <p>{UslugiPage.description}</p>
                </div>
                <div className="block__docs">                  
                  <div className="flex flex-col">{priceItems}</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Section>
    );
  }
  return loading ? "Загружается" : "";
}
