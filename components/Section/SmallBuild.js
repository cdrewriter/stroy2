import Section from "./Section";


export default function SmallBuildSection({smallbuild}) {
  const { data } = smallbuild;
  const { photos } = smallbuild;
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
      key="smallbuild"
      className="smallbuild  my-12 h-screen full-height"
    >
      <div className="h-full lg:mx-auto bg-local ">
        <div className="p-4 h-full shadow-2xl bg-white">
          <div className="container h-full flex-col md:flex-row mx-auto block__custom mt-12 flex flex-col">
            <div className="box">
            
              <span className="section__textShaddow">
                {smallbuild.title__text}
              </span>
              <h2 className="section__title">{smallbuild.title}</h2>
              <div className="block__desc">
                <p>{smallbuild.description}</p>
              </div>         
            </div>
            <div className="box">
            <div className="flex">{priceItems}</div>
            </div>
            <div className="box">
              <dl>
                  <dt>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41">
  <text id="shield-check" transform="translate(0 35)" fill="#707070" font-size="40" font-family="FontAwesome5Pro-Regular, 'Font Awesome 5 Pro'"><tspan x="0" y="0">shield-check</tspan></text>
</svg>

                  </dt>
                  <dd>Гарантия 
15</dd>
                  <dt>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 50 40">
  <text id="graduation-cap" transform="translate(0 35)" fill="#707070" font-size="40" font-family="FontAwesome5Pro-Regular, 'Font Awesome 5 Pro'"><tspan x="0" y="0">graduation-cap</tspan></text>
</svg>

                  </dt>
                  <dd>ТОЛЬКО ДИПЛОМИРОВАННЫЕ СПЕЦИАЛИСТЫ </dd>
                  <dt>
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="42" viewBox="0 0 45 42">
  <text id="house-flood" transform="translate(0 36)" fill="#707070" font-size="40" font-family="FontAwesome5Pro-Regular, 'Font Awesome 5 Pro'"><tspan x="0" y="0">house-flood</tspan></text>
</svg>

                  </dt>
                  <dd>Различные варианты проектов</dd>
                  <dt>
                    <Flip key="pom" data={1000} />
                    <span>м2</span>
                  </dt>
                  <dd>РЕКОНСТРУИРОВАННЫХ ПОМЕЩЕНИй</dd>
                </dl></div>
          </div>
        </div>
      </div>
    </Section>
    );
  };
  