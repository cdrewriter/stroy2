import Section from "./Section";
import {Chevron} from '../Icons/Chevron';

export default function MainSection({title, titleText}) {
  function inHtml() {
    return <div  className="text-white" dangerouslySetInnerHTML={{ __html: `${titleText}` }} />;
  }
    return (
        <Section
        className="bd px-6 md:px-12 lg:px-16 h-screen full-height"
      >
        <div className="h-full lg:mx-auto bg-local ">
          <div className="md:p-4  h-full shadow-inner bg-hero-pattern">
            <div className="container h-full  mx-auto block__custom justify-evenly flex flex-col">
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
  