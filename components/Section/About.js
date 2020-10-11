import Section from "./Section";
import Flip from "../Flip/Flip";

export default function AboutSection({about}) {
 
  const { data } = about;
  const { photos } = about;
  const priceItems = [];
  //console.log(photos)
  if (photos.images && photos.images.length) {
      for (let i = 0; i < photos.images.length; ++i) {
        const { image } = photos.images[i];
        //console.log(image.publicUrl);
        priceItems.push(
          <>
            <img key={i} src={image.publicUrl} />
          </>
        );
      }
    } 
    return (
      <Section
      key="about"
      className="bd md:pl-24 md:pr-24 pl-8 pr-8 mb-24 h-screen full-height"
    >
      <div className="h-full lg:mx-auto bg-local ">
        <div className="p-4 h-full shadow-2xl bg-white">
          <div className="container h-full flex-col md:flex-row mx-auto block__custom mt-12 flex flex-col">
            <div className="box">
              <h2 className="section__title">{about.title}</h2>
              <span className="section__textShaddow">
                {about.title__text}
              </span>

              <div className="block__desc">
                <p>{about.description}</p>
              </div>
              <h4 className="title">Документы</h4>
              <div className="flex">{priceItems}</div>
            </div>
            <div className="box">
              <div className="feauteres ">
                <dl>
                  <dt>
                    <Flip key="kol" data={32} />
                  </dt>
                  <dd>ЧЕЛОВЕКА НАШ КОЛЛЕКТИВ</dd>
                  <dt>
                    <Flip key="project" data={50} />
                    <span>+</span>
                  </dt>
                  <dd>ЗАКОНЧЕННЫХ ПРОЕКТОВ</dd>
                  <dt>
                    <Flip key="net" data={100} />
                    <span>+км</span>
                  </dt>
                  <dd>ПОСТРОЕНО СЕТЕЙ КОММУНИКАЦИЙ</dd>
                  <dt>
                    <Flip key="pom" data={1000} />
                    <span>м2</span>
                  </dt>
                  <dd>РЕКОНСТРУИРОВАННЫХ ПОМЕЩЕНИй</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
    );
  };
  