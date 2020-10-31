import Section from "./Section";

export default function MainSection({title, titleText}) {
  function inHtml() {
    return <div  className="text-white" dangerouslySetInnerHTML={{ __html: `${titleText}` }} />;
  }
    return (
        <Section
        key="mainscr"
        className="bd md:pl-24 md:pr-12 pl-8 pr-8 mb-24 h-screen full-height"
      >
        <div className="h-full lg:mx-auto bg-local ">
          <div className="p-4 h-full shadow bg-hero-pattern">
            <div className="container h-full  mx-auto block__custom flex flex-col">
              <div className="block__outer">
                <div className="z-12 heading relative shadow-2xl">
                  <h1 className="leading-normal">{title}</h1>
                </div>
                <div className="bd z-16 heading__subtitle relative w-14 shadow-xl">
                  {inHtml()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  };
  