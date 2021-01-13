import Section from "./Section";
import style from "./UslugiPage.module.scss";

export default function UslugiSection({ datas, items }) {
  const { data } = datas;
  const { photos } = items;
  const priceItems = [];

  if (items && items.length) {
    for (let i = 0; i < items.length; ++i) {
      //const { image } = items[i].photos;
      console.log(items[i].image);
      priceItems.push(
        <div key={i}  className={style.uslugi__item} key={items[i].id}>
          <img src={items[i].image.publicUrlTransformed} />
          <h3>{items[i].name}</h3>
          <p>
            {items[i].description}
          </p>
          <p>
          {items[i].postCategories.name}
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
            <div className="grid  gap-4 build-img">
              <div className="box  grid items-stretch col-span-2">
                <div className="block__title">
                  <h2 className="section__title">{datas.title}</h2>                  
                </div>
                <div className="block__desc">
                  <p>{datas.description}</p>
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
