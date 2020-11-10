import Section from "./Section";

export default function ConstructionSection({ data, items }) {
  //const { data } = datas;
  //console.log(items);
  // const img = datas.image;  {

  const constructItems = [];
  //console.log(items.length)
  if (items && items.length) {
    for (let i = 0; i < items.length; ++i) {
      const image = items[i].image;
      //console.log(items[i].image);
      constructItems.push(
        <div
          className="item"
          key={items[i].id}
          style={{ backgroundImage: ` url(${image.publicUrlTransformed})` }}
        >
          <h3>{items[i].name}</h3>
        </div>
      );
    }
  }

  //console.log(constructItems)
  function inHtml() {
    return <div dangerouslySetInnerHTML={{ __html: `${data.description}` }} />;
  }
  return (
    <Section className="construction">
      <div className="lg:mx-auto bg-local relative">
        <div className="bg-text">
          <span>ТОРГОВЫЕ ЦЕНТРЫ </span>
          <span>ОФИСНЫЕ ЦЕНТРЫ </span>
          <span>СКЛАДСКИЕ ТЕРМИНАЛЫ</span>
        </div>
        <div className="py-40 bg-white">
          <div className="container h-full mx-auto block__custom mt-12 ">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="box col-span-2 ugol_b_left_top">
                <span className="section__textShaddow">{data.title__text}</span>
                <h2 className="section__title">{data.title}</h2>
                <div className="block__desc ugol_s_bottom_left">{inHtml()}</div>
                <div className="box py-12">
                  <div className="container md:container md:mx-auto">
                    <div className="specs flex">
                      <div className="item flex flex-1 p-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48.001"
                          viewBox="0 0 48 48.001"
                        >
                          <path
                            id="Path_28"
                            data-name="Path 28"
                            d="M46.207-8.758,38.737-12l7.47-3.242A2.252,2.252,0,0,0,47.376-18.2a2.256,2.256,0,0,0-2.962-1.169L24.05-10.49,6.742-18l15.984-6.936a2.252,2.252,0,0,0,1.169-2.959,2.254,2.254,0,0,0-2.962-1.169L1.8-20.76A3,3,0,0,0,0-18a3,3,0,0,0,1.793,2.758L9.264-12,1.8-8.76A3,3,0,0,0,0-6,3,3,0,0,0,1.793-3.24L22.256,5.637A5.19,5.19,0,0,0,24,6a4.418,4.418,0,0,0,1.743-.362L46.2-3.238A3,3,0,0,0,48-6,3,3,0,0,0,46.207-8.758ZM24.05,1.51,6.742-6l8.177-3.547,7.339,3.184A4.356,4.356,0,0,0,24-6a4.382,4.382,0,0,0,1.743-.36l7.341-3.186L41.267-6ZM46.5-33.75H39.75V-40.5a1.5,1.5,0,0,0-1.5-1.5h-1.5a1.5,1.5,0,0,0-1.5,1.5v6.75H28.5a1.5,1.5,0,0,0-1.5,1.5v1.5a1.5,1.5,0,0,0,1.5,1.5h6.75v6.75a1.5,1.5,0,0,0,1.5,1.5h1.5a1.5,1.5,0,0,0,1.5-1.5v-6.75H46.5a1.5,1.5,0,0,0,1.5-1.5v-1.5A1.5,1.5,0,0,0,46.5-33.75Z"
                            transform="translate(0 42)"
                            fill="#14213d"
                          />
                        </svg>

                        <span>
                          Составим
                          <br /> проект.
                        </span>
                      </div>

                      <div className="flex flex-1 p-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="42"
                          height="48"
                          viewBox="0 0 42 48"
                        >
                          <path
                            id="Path_27"
                            data-name="Path 27"
                            d="M21-16.5a7.835,7.835,0,0,1-7.348-6h-4.5A11.963,11.963,0,0,0,21-12,11.96,11.96,0,0,0,32.85-22.5h-4.5A7.834,7.834,0,0,1,21-16.5ZM29.4-9C26.707-9,25.42-7.5,21-7.5S15.293-9,12.6-9h0A12.6,12.6,0,0,0,0,3.6,2.4,2.4,0,0,0,2.4,6H39.6A2.4,2.4,0,0,0,42,3.6,12.6,12.6,0,0,0,29.4-9ZM4.776,1.5a8.567,8.567,0,0,1,7.828-6C13.957-4.5,16.192-3,21-3c4.825,0,7.041-1.5,8.4-1.5a8.564,8.564,0,0,1,7.824,6Zm3.474-27h25.5a.75.75,0,0,0,.75-.75v-3a.75.75,0,0,0-.75-.75H33a10.411,10.411,0,0,0-6.449-9.6L24-34.5v-6A1.5,1.5,0,0,0,22.5-42h-3A1.5,1.5,0,0,0,18-40.5v6l-2.551-5.1A10.411,10.411,0,0,0,9-30H8.25a.75.75,0,0,0-.75.75v3A.75.75,0,0,0,8.25-25.5Z"
                            transform="translate(0 42)"
                            fill="#14213d"
                          />
                        </svg>

                        <span>Изготовим металлоконструкции.</span>
                      </div>

                      <div className="flex flex-1 p-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="48"
                          viewBox="0 0 60 48"
                        >
                          <path
                            id="Path_26"
                            data-name="Path 26"
                            d="M58.5-6H51V-40.5A1.5,1.5,0,0,0,49.5-42h-3A1.5,1.5,0,0,0,45-40.5v39A1.5,1.5,0,0,0,46.5,0h12A1.5,1.5,0,0,0,60-1.5v-3A1.5,1.5,0,0,0,58.5-6ZM39-19.772a6.021,6.021,0,0,0-.488-2.362L31.172-39.272A4.5,4.5,0,0,0,27.028-42H13.5A4.5,4.5,0,0,0,9-37.5V-27H4.5A4.5,4.5,0,0,0,0-22.5V-3A9,9,0,0,0,9,6a9,9,0,0,0,9-9h6a9,9,0,0,0,9,9,9,9,0,0,0,9-9,8.955,8.955,0,0,0-3-6.666ZM9,1.5A4.5,4.5,0,0,1,4.5-3,4.5,4.5,0,0,1,9-7.5,4.5,4.5,0,0,1,13.5-3,4.5,4.5,0,0,1,9,1.5ZM24-18l-9-9v-9H26.044L33-19.772V-18ZM33,1.5A4.5,4.5,0,0,1,28.5-3,4.5,4.5,0,0,1,33-7.5,4.5,4.5,0,0,1,37.5-3,4.5,4.5,0,0,1,33,1.5Z"
                            transform="translate(0 42)"
                            fill="#14213d"
                          />
                        </svg>

                        <span>Доставим строительные материалы</span>
                      </div>
                    </div>
                    <div className="block__desc sub__desc">
                      <p>
                        {" "}
                        Все детали проектируются и производятся с учетом
                        требований и норм государственного стандарта, что
                        позволяет вести бизнес без претензий со стороны
                        надзорных органов.
                      </p>
                    </div>
                    <div className="items">{constructItems}</div>
                  </div>
                </div>
              </div>

              {/* Изображения<div className="image z-10 col-span-1 grid items-center">
                <img src={img.publicUrl} className="shadow-3xl"/>
  </div>*/}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
