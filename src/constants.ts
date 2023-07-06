import { ICardFeature, ICvStudyCard, TAppLanguage } from './types';

export const DEFAULT_LANGUAGE: TAppLanguage = 'en';
export const LOCALES: { [key in TAppLanguage]: string } = {
  en: 'English',
  pl: 'Polski',
  ua: 'Українська',
};

export const MarkInfo = {
  name: 'Mark',
  description:
    'Full Stack Developer | ReactJs | VueJs | PHP | Laravel. Proactive and motivated web dev.',
  social: 'https://www.linkedin.com/in/mark-kulishov-85140b1b5/',
  photo: 'https://www.linkpicture.com/q/1667212723497.jpeg',
};

export const FeaturesData_1: ICardFeature[] = [
  {
    img: 'https://i.ibb.co/zZ84xNB/storm.png',
    featureName: 'Welcome page',
  },
  {
    img: 'https://i.ibb.co/Z2dKgvk/manage.png',
    featureName: 'User authorization',
  },
];

export const FeaturesData_2: ICardFeature[] = [
  {
    img: 'https://i.ibb.co/ZxQtX96/laptop.png',
    featureName: 'Request editor',
  },
  {
    img: 'https://i.ibb.co/hfpKPx0/analyze.png',
    featureName: 'Variables editor',
  },
  {
    img: 'https://i.ibb.co/GdR1hHx/layer.png',
    featureName: 'Headers editor',
  },
  {
    img: 'https://i.ibb.co/Z86yLS4/doc.png',
    featureName: 'Documentation explorer',
  },
  {
    img: 'https://i.ibb.co/jbRS7z2/cloud.png',
    featureName: 'Response section',
  },
];

export const FeaturesData_3: ICardFeature[] = [
  {
    img: 'https://i.ibb.co/ZxQtX96/laptop.png',
    featureName: 'Localization',
  },
  {
    img: 'https://i.ibb.co/r6p9zSr/semantic.png',
    featureName: 'Semantic layout',
  },
  {
    img: 'https://i.ibb.co/DQZX0sy/header.png',
    featureName: 'Sticky header',
  },
  {
    img: 'https://i.ibb.co/2SDKNh1/chrome.png',
    featureName: 'Google Chrome support',
  },
  {
    img: 'https://i.ibb.co/RB4JVZ4/private.png',
    featureName: 'Private routes, 404, error boundary',
  },
  {
    img: 'https://i.ibb.co/ZGfvfRr/react.png',
    featureName: 'React 18 +',
  },
  {
    img: 'https://i.ibb.co/VxfxbMz/Vitejs-logo-svg.png',
    featureName: 'Vite',
  },
  {
    img: 'https://i.ibb.co/2S86SfG/ts.png',
    featureName: 'Typescript',
  },
  {
    img: 'https://i.ibb.co/5FyLVDx/error.png',
    featureName: 'Error display',
  },
  {
    img: 'https://i.ibb.co/NSFRN99/validation.png',
    featureName: 'Client-side validation',
  },
  {
    img: 'https://i.ibb.co/52TjW7S/suspense.png',
    featureName: 'Suspense feature',
  },
];

export const MAIN_PAGE_PATH = '/main';
export const WELCOME_PAGE_PATH = '/';

export const resizedImgFeature = [
  'Google Chrome support',
  'Semantic layout',
  'React 18 +',
  'Sticky header',
  'Vite',
  'Typescript',
  'Error display',
  'Client-side validation',
  'Suspense feature',
];

export const resizedTextFeature = ['Google Chrome support', 'Private routes, 404, error boundary'];

export const NUM_OF_PARTICLES = 40;

export const RICKANDMORTYAPI_BASE_URL = 'https://rickandmortyapi.com/graphql';

export const StudyData_react: ICvStudyCard[] = [
  {
    img: 'https://www.linkpicture.com/q/react.jpeg',
    name: 'React Js final project screen',
    description: '',
  },
  {
    img: 'https://www.linkpicture.com/q/react_cert.jpeg',
    name: 'React Js certificate',
    description: '',
  },
];

export const StudyData_fe: ICvStudyCard[] = [
  {
    img: 'https://www.linkpicture.com/q/fe_project.jpeg',
    name: 'Frontend Js final project screen',
    description: '',
  },
  {
    img: 'https://www.linkpicture.com/q/fe_cert.jpeg',
    name: 'Frontend Js certificate',
    description: '',
  },
];
