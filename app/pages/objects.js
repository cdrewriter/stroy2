
import Layout from '../templates/layout';

import ProjectCard from '../templates/ProjectCard/ProjectCard';

const ObjectsPage = () => {
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
export default ObjectsPage;