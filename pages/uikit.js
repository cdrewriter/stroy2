import Layout from '../templates/layout';
import FeedbackSection from "../components/Section/Feedback";
import FirstScreen from "../screens/FirstScreen/FirstScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import CategoryScreen from "../screens/CategoryScreen/CategoryScreen";
import SlideProjectsScreen from "../screens/SlideProjectsScreen/SlideProjectsScreen";
import SwiperProjects from "../components/Swiper/SwiperProjects";



const Uikit = () => {
    return (
        <Layout>

            <FirstScreen />
            <AboutScreen />
            <CategoryScreen />
            <SlideProjectsScreen />
            <SwiperProjects />
            <FeedbackSection />


        </Layout>
    )
}
export default Uikit;