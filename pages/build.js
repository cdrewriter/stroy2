import react from "react";
import Layout from '../templates/layout';
import FeedbackSection from "../components/Section/Feedback";
import FirstScreen from "../screens/FirstScreen/FirstScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import CategoryScreen from "../screens/CategoryScreen/CategoryScreen";
import SlideProjectsScreen from "../screens/SlideProjectsScreen/SlideProjectsScreen";
import SwiperProjects from "../components/Swiper/SwiperProjects";
import Aside from '../templates/aside';
import Box from "../components/Box/Box";
import ProjectCard from '../templates/ProjectCard/ProjectCard';
const BuildPage = () => {

    return (
        <Layout asideOn={true}>
            <div className={'header'}>
                <span className={'UPheading'}>КОММЕРЧЕСКОГО/НАЗНАЧЕНИЯ</span>
                <h1>Строительство</h1>
            </div>
            <div className={'content'}>
                <strong>отзывы</strong> довольных клиентов -
                <strong> подтверждение</strong> нашей <strong>репутации</strong>
            </div>

                <ProjectCard />

        </Layout>
    )
}
export default BuildPage;