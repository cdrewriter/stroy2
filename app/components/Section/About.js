import Section from "./Section";
import Flip from "../Flip/Flip";

export default function AboutSection({about}) {
    const {data} = about;
    const {photos} = about;

    function inHtml() {
        return <div className="block__desc pl-12" dangerouslySetInnerHTML={{__html: `${about.description}`}}/>;
    }

    const priceItems = [];
    //console.log(photos)
    if (photos.images && photos.images.length) {
        for (let i = 0; i < photos.images.length; ++i) {
            const {image} = photos.images[i];
            //console.log(image.publicUrl);
            priceItems.push(
                <img key={i} src={image.publicUrlTransformed}/>
            );
        }
    }
    return (
        <Section className="bd about p-0 md:p-12 lg:p-24 relative">
            <div className="lg:mx-auto bg-local bggray30">
                <div className="py-24 shadow-2xl bg-white relative z-10">
                    <div className="container mx-auto block__custom">
                        <div className="lg:grid grid-cols-3 gap-4">
                            <div className="box  items-stretch col-span-2">
                                <div className="block__title ">
                                    <span className="section__textShaddow">{about.title__text}</span>
                                    <h2 className="section__title">{about.title}</h2>

                                </div>
                                {inHtml()}

                                <div className="block__docs ml-12">
                                    <h4 className="title">Документы</h4>
                                    <div className="flex">{priceItems}</div>
                                </div>
                            </div>
                            <div className="box col-span-1">
                                <div className="feauteres ">
                                    <dl>
                                        <dt>
                                            <Flip key="kol" data={32}/>
                                        </dt>
                                        <dd>ЧЕЛОВЕКА НАШ КОЛЛЕКТИВ</dd>
                                        <dt>
                                            <Flip key="project" data={50}/>
                                            <span>+</span>
                                        </dt>
                                        <dd>ЗАКОНЧЕННЫХ ПРОЕКТОВ</dd>
                                        <dt>
                                            <Flip key="net" data={100}/>
                                            <span>+км</span>
                                        </dt>
                                        <dd>ПОСТРОЕНО СЕТЕЙ КОММУНИКАЦИЙ</dd>
                                        <dt>
                                            <Flip key="pom" data={1000}/>
                                            <span>м2</span>
                                        </dt>
                                        <dd>РЕКОНСТРУИРОВАННЫХ ПОМЕЩЕНИй</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
