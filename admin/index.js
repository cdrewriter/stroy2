import Dashboard from './pages/dashboard';
import About from './pages/about';

export default {
  pages: () => [
    {
      label: 'A new dashboard',
      path: '',
      component: Dashboard,
    },
    {
      label: 'About this project',
      path: 'about',
      component: About,
    },
    {
      label: 'Первый экран',
      children: [
        { listKey: 'Main' },
      ],
    },
    {
      label: 'О компании',
      children: [
        { listKey: 'About', label: 'Раздел о компании' },


      ],
    },
    {
      label: 'СТРОИТЕЛЬСТВО',
      children: [
        { listKey: 'SmallBuild', label: 'ЧАСТНОЕ / МАЛОЭТАЖНОЕ',  },
        { label: 'КОММЕРЧЕСКАЯ НЕДВИЖИМОСТЬ', listKey: 'Construction' },
        { label: 'Категории', listKey: 'ConstructionItem' },
        { label: 'Портфолио', listKey: 'ConstructionPortfolio', title: 'Портфолио' },

      ],
    },
    {
      label: 'Услуги',
      children: [
        { label: 'Все услуги', listKey: 'Uslugi' },
        { label: 'Страница описания', listKey: 'UslugiPage' },

      ],
    },
    {
      label: 'ТИПОВЫЕ РЕШЕНИЯ',
      children: [
        { label: 'Все решения', listKey: 'DefObj' },
        { label: 'Категории', listKey: 'DefObjPage' },

      ],
    },
    {
      label: 'People',
      children: ['User'],
    },
  ],
};
