import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Cristina Crucianu | Product Manager', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Cristina Crucianu's website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Cristina',
  subtitle: "I'm the Product Carer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a seasoned product manager at an ed-tech startup in Barcelona and above all, I define myself as a growth mindset person. For this reason, I host a podcast called Growth Mindset On to spread the #growthmindseton attitude.",
  paragraphTwo:
    'My growth attitude has taken me to learn 6 languages, live in 5 countries, build 2 businesses, finish 2 masters and start a podcast.',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/ccrucianu/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'timeline_phandeeyar_talk.png',
    title: 'Speaker @ Phandeeyar',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    info2: '',
    url: 'https://www.linkedin.com/events/userresearchanduserinterviewtobuildtherightproduct/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'timeline_service_club.jpg',
    title: 'Service Club',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'timeline_manomano.png',
    title: 'Product Manager @ ManoMano',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/cristincrucianu',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ccrucianu/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
