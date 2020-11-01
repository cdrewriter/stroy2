import Section from "./Section";
import Flip from "../Flip/Flip";

export default function UslugiSection({ datas, items }) {
  const { data } = datas;
  const { photos } = datas;
  const priceItems = [];
  //console.log(items)
  if (items && items.length) {
    for (let i = 0; i < items.length; ++i) {
      //const { image } = photos.images[i];
      //console.log(image.publicUrl);
      priceItems.push(
        <div key={items[i].id}>
          <img key={i} src={items[i].image} />
          <h3>{items[i].name}</h3>
          <p>
          {items[i].description}
          </p>
          <p>
          {items[i].postCategories.name}
          </p>

          </div>
      );
    }
  }
  return (
    <Section
      key="about"
      className="bd my-12 full-height"
    >
      <div className="lg:mx-auto bg-local ">
        <div className="py-16 shadow-2xl bg-white">
          <div className="container mx-auto block__custom mt-12">
            <div className="grid  gap-4">
              <div className="box  grid items-stretch col-span-2">
                <div className="block__title">
                  <h2 className="section__title">{datas.title}</h2>
                  <span className="section__textShaddow">
                    {datas.subtext}
                  </span>
                </div>
                <div className="block__desc">
                  <p>{datas.description}</p>
                </div>
                <div className="block__docs">
                  <h4 className="title">Документы</h4>
                  <div className="flex">{priceItems}</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
