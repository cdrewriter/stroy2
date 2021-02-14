import Section from "./Section";
import {Chevron} from '../Icons/Chevron';

export default function MainSection({title, titleText}) {
  function inHtml() {
    return <div  className="text-white" dangerouslySetInnerHTML={{ __html: `${titleText}` }} />;
  }
    return (
        <Section
        className="bd md:px-24 px-4 mb-24 h-screen full-height"
      >
        <div className="h-full lg:mx-auto bg-local ">
          <div className="p-4 h-full shadow-inner bg-hero-pattern">
            <div className="container h-full  mx-auto block__custom justify-evenly flex flex-col">
              <div className="block__outer">
                <div className="z-12 heading relative shadow-2xl">
                  <h1 className="leading-normal">{title}</h1>
                </div>
                <div className="bd z-16 heading__subtitle relative w-14 shadow-xl">
                  {inHtml()}
                </div>
              </div>
              <a className="mx-auto flex flex-col next bloc text-center font-bold uppercase text-gray-500 tracking-wider"  href="#">Далее<Chevron clme={'-mt-2 w-16 h-16 mx-auto'} /></a>
            </div>
          </div>
        </div>
      </Section>
    );
  };
  