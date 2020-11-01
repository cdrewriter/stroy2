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
          <div className="image">
            <img src={image.publicUrl} />
          </div>
          <div className="heading__portfolio">
            <span>{odate}</span>
            <h3>{items[i].title}</h3>
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
      <div className="portfolio shadow-lg">
        <div className="lg:mx-auto bg-local relative">
          <div className="p-40  bg-white">
            <div className="container h-full mx-auto block__custom mt-12 ">
              <box className="grid grid-cols-2 gap-4 ">
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
              </box>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-first m-24 mx-auto">Загрузить еще</button>
    </Section>
  );
}
