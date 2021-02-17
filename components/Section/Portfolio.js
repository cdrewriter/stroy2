import Section from "./Section";

export default function PortfolioSection({ data, items }) {
  //const { data } = datas;
  //console.log(items);
  // const img = datas.image;  {

  const constructItems = [];
  //console.log(items.length)
  if (items && items.length) {
    for (let i = 0; i < items.length; ++i) {
      const image = items[i].image;
      const options = { year: "numeric", month: "long" };
      const odate = new Date(items[i].publishedDate).toLocaleDateString(
          undefined,
          options
      );
      // console.log(items[i].image);
      constructItems.push(
          <div className="item" key={items[i].id}>

            <img className="image" src={image.publicUrlTransformed} />

            <div className="heading__portfolio">
              <span className="text-gray-500 text-sm">{odate}</span>
              <h3 className="text-gray-800">{items[i].title}</h3>
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
    <Section className="portfolio">
        <div className="lg:mx-auto bg-local relative">
          <div className="py-8 lg:p-24 xl:p-32 xl:pr-16  bg-white">
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

      
    </Section>
  );
}
