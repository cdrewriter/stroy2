import Section from "./Section";

export default function SmallBuildSection({ smallbuild }) {
  const { data } = smallbuild;
  const img = smallbuild.image;
  // {
  //   /*const { photos } = smallbuild;
  // const priceItems = [];
  // //console.log(photos)
  // if (photos.images && photos.images.length) {
  //   for (let i = 0; i < photos.images.length; ++i) {
  //     const { image } = photos.images[i];
  //     //console.log(image.publicUrl);
  //     priceItems.push(
  //       <>
  //         <img key={i} src={image.publicUrl} />
  //       </>
  //     );
  //   }
  // }*/
  // }
  function inHtml() {
    return <div className="block__desc ugol_s_bottom_left" dangerouslySetInnerHTML={{__html: `${smallbuild.description}`}}/>;
  }
  return (
    <Section
      className="smallbuild"
    >
      <div className="bg-local relative bggray30">
        <div className="py-8 md:py-12 lg:py-16 xl:py-32 shadow-2xl bg-white">
          <div className="container 2xl:container h-full mx-auto block__custom mt-12 ">
            <div className="xl:grid grid-cols-5 gap-4 ">
              <div className="box col-span-3 ugol_b_left_top">
                <span className="section__textShaddow">
                  {smallbuild.title__text}
                </span>
                <h2 className="section__title">{smallbuild.title}</h2>

                 {inHtml() }

                <div className="box lg:py-12 flex-col md:flex-row">
                  <div className="specs flex flex-col md:flex-row">
                    <div className="flex flex-1 p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37.88"
                        height="40.401"
                        viewBox="0 0 37.88 40.401"
                      >
                        <path
                          d="M12.867-16.81a.955.955,0,0,0-1.342-.008L9.734-15.042A.955.955,0,0,0,9.726-13.7L16.891-6.48a.955.955,0,0,0,1.342.008L31.854-19.982a.955.955,0,0,0,.008-1.342l-1.776-1.791a.955.955,0,0,0-1.342-.008L17.586-12.059ZM36.8-28.395,21.65-34.708A4.53,4.53,0,0,0,20.194-35a4.53,4.53,0,0,0-1.456.29L3.586-28.395A3.784,3.784,0,0,0,1.25-24.9c0,15.665,9.036,26.492,17.48,30.012a3.8,3.8,0,0,0,2.912,0C28.405,2.3,39.13-7.434,39.13-24.9A3.789,3.789,0,0,0,36.8-28.395ZM20.19,1.617C12.5-1.587,5.038-11.538,5.038-24.9L20.19-31.212,35.342-24.9C35.342-11.183,27.577-1.46,20.19,1.617Z"
                          transform="translate(-1.25 34.998)"
                          fill="#707070"
                        />
                      </svg>

                      <span>Гарантия<br /> 15 лет</span>
                    </div>

                    <div className="flex flex-1 p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="40"
                        viewBox="0 0 50 40"
                      >
                        <path
                          d="M47.4-21.259,27.244-29.548a5.8,5.8,0,0,0-4.487,0L2.6-21.259A4.843,4.843,0,0,0,0-16.665,4.843,4.843,0,0,0,2.6-12.07l1.769.727a10.21,10.21,0,0,0-.445,1.7A3.517,3.517,0,0,0,2.5-6.665,3.655,3.655,0,0,0,3.583-3.994L1.588,7.972C1.415,9.013,2.009,10,2.809,10H7.192c.8,0,1.394-.988,1.22-2.028l-2-11.966A3.658,3.658,0,0,0,7.5-6.665,3.672,3.672,0,0,0,6.451-9.307a5.706,5.706,0,0,1,.379-1.024l4.287,1.763L10,3.334C10,7.015,16.716,10,25,10S40,7.016,40,3.334l-1.116-11.9,8.516-3.5A4.842,4.842,0,0,0,50-16.666,4.841,4.841,0,0,0,47.4-21.259ZM36.128,2.341C31.464,5.9,18.48,5.86,13.873,2.341l.883-9.413,8,3.291a5.794,5.794,0,0,0,4.488,0l8-3.291ZM26.14-8.56a2.973,2.973,0,0,1-2.28,0L12.08-13.406l13.149-3.287a1.7,1.7,0,0,0,1-1.945c-.127-.908-.788-1.5-1.458-1.329L8.849-15.989a5.21,5.21,0,0,0-1.462.653L4.156-16.667l19.7-8.1a2.973,2.973,0,0,1,2.28,0l19.7,8.106Z"
                          transform="translate(0 30)"
                          fill="#707070"
                        />
                      </svg>

                      <span>Только дипломированые специалисты </span>
                    </div>

                    <div className="flex flex-1 p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44.992"
                        height="39.995"
                        viewBox="0 0 44.992 39.995"
                      >
                        <path
                          d="M2.977-15.875a.63.63,0,0,0,.883.086l1.148-.937V-2.859A4.313,4.313,0,0,1,7.5-3.688a4.507,4.507,0,0,1,1.25.211V-19.8L22.1-30.742a.624.624,0,0,1,.789,0L36.242-19.8v2.3h.008V-3.477A4.515,4.515,0,0,1,37.5-3.7a4.313,4.313,0,0,1,2.508.836V-16.734l1.148.937a.63.63,0,0,0,.883-.086l1.586-1.937a.637.637,0,0,0-.1-.875L40-21.578v-7.8A.627.627,0,0,0,39.375-30h-2.5a.627.627,0,0,0-.625.625v4.727L24.484-34.289a3.121,3.121,0,0,0-3.961,0L1.477-18.7a.629.629,0,0,0-.086.883ZM43.867,1.242A9.993,9.993,0,0,1,38.68-.781a1.892,1.892,0,0,0-2.367.008A10.045,10.045,0,0,1,30,1.3,10.3,10.3,0,0,1,23.68-.781a1.892,1.892,0,0,0-2.367.008A10.045,10.045,0,0,1,15,1.3,10.3,10.3,0,0,1,8.68-.781a1.892,1.892,0,0,0-2.367.008A9.638,9.638,0,0,1,1.148,1.242,1.244,1.244,0,0,0,0,2.453V3.742a1.233,1.233,0,0,0,1.3,1.25A14,14,0,0,0,7.5,2.977a15.094,15.094,0,0,0,15,0,15.094,15.094,0,0,0,15,0,14.068,14.068,0,0,0,6.188,2.016,1.233,1.233,0,0,0,1.3-1.25v-1.3A1.214,1.214,0,0,0,43.867,1.242ZM18.75-20a1.254,1.254,0,0,0-1.25,1.25v7.5A1.254,1.254,0,0,0,18.75-10h7.5a1.254,1.254,0,0,0,1.25-1.25v-7.5A1.254,1.254,0,0,0,26.25-20Z"
                          transform="translate(0 34.998)"
                          fill="#707070"
                        />
                      </svg>

                      <span>Различные варианты проектов</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="image z-10 hidden xl:block col-span-2 grid items-center">
                <img src={img.publicUrlTransformed} className="shadow-3xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
