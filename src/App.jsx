// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FullStackDevelopment from './components/FullStackDevelopment';
import Home from './components/Home';
import Layout from './Layout';
import DataScience from './DataScience';
import Devops from './Devops';
import CyberSecurity from './CyberSecurity';

const names = [
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png',
    name: 'Use ReactJS to Fetch and Display Data from API – 5 Simple Steps',
    author: 'tanu singh',
    date: '21-03-2022'
  }, {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-768x402.webp',
    name: 'How Long Would It Take to Be a Full Stack Developer?',
    author: ' By Meghana D',
    date: '26 Mar, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs.png',
    name: 'How to Render an Array of Objects in React? [in 3 easy steps]',
    author: 'tanu singh',
    date: '21-03-2022'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2015/02/blog-2-e1626109662385.png',
    name: 'Top 30 Mini Project Ideas For College Students [UPDATED]',
    author: 'Srinithi Sankar',
    date: '22-01-2022'
  },{
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Featured-image-Best-Way-to-Learn-DevOps-768x402.webp',
    name: 'How Long Will It Take to Learn DevOps?',
    author: ' By Lukesh S',
    date: '15 Apr, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/05/2202.i402.018.S.m004.c13.Devops-engineer-flat-composition-768x591.jpg',
    name: 'As a Software Engineer, How Do I Shift My Career to DevOps?',
    author: 'By Lahari Chandana',
    date: ' 16 Apr, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Mechanical-Engineering-Project-Ideas.webp',
    name: '20 Mechanical Engineering Project Ideas',
    author: 'ACADEMICS',
    date: '21-05-2012'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/03/10_hardest_and_easiest_programming_languages_in_2024.webp',
    name: '10 Hardest and Easiest Programming Languages in 2024',
    author: 'PROGRAMMING LANGUAGES',
    date: '21-03-2022'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2022/08/6.-TCS-Xplore-Python-Coding-Questions-768x402.png',
    name: 'Top 9 TCS Xplore Python Coding Questions [DeCode with GUVI]',
    author: 'CAREER',
    date: '22-01-2024'
  },
  {
    img: '',
    name: 'Is coding required for cybersecurity? If yes, how crucial is coding for cyb...',
    author: 'By Tushar Vinocha',
    date: '25 Mar, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-768x402.webp',
    name: '12 Real-World Data Science Examples: Power Of Data Science',
    author: 'By Lukesh S',
    date: '25 Mar, 2024'
  },
];

const DataSciencenames = [
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
    name: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
    author: 'sha Sharma',
    date: '16 Apr, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-768x402.webp',
    name: '12 Real-World Data Science Examples: Power Of Data Science',
    author: 'By Lukesh S',
    date: '25 Mar, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-768x402.png',
    name: 'Can A Commerce Student Do Data Science',
    author: 'By Saakshi Priyadarshini',
    date: '16 Apr, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp',
    name: 'Top Product-Based Companies for Data Scientists in 2024',
    author: 'By Jaishree Tomar',
    date: '26 Mar, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-768x433.png',
    name: 'Roles and Responsibilities of a Data Scientist',
    author: 'By Jaishree Tomar',
    date: '16 Apr, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Scientist-Salary-in-India-2023-768x402.png',
    name: 'Everything about Data Scientist Salary in India | 2024',
    author: 'By Srinithi Sankar',
    date: '02 Apr, 2024'
  },

]


const FullStackDevelopmentnames = [
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-768x513.jpg',
    name: 'Best Full-Stack Development Project Ideas in 2024',
    author: ' By Isha Sharma',
    date: '25 Mar, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-768x402.webp',
    name: 'How Long Would It Take to Be a Full Stack Developer?',
    author: ' By Meghana D',
    date: '26 Mar, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png',
    name: '10 Best Database Management Systems For Software Developers',
    author: ' By Isha Sharma',
    date: '  22 Mar, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2021/05/react-600x314.jpg',
    name: '6 Essential Prerequisites For Learning ReactJS',
    author: 'By Ramkumar',
    date: '25 Mar, 2024'
  },
  {
    img: '',
    name: 'Best Web Development Roadmap for Beginners 2024',
    author: '  By Isha Sharma',
    date: ' 16 Apr, 2024'
  },
 

]


const Devopsnames = [
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/DevOps-Project-Ideas-768x402.webp',
    name: '10 Best DevOps Project Ideas for 2024',
    author: ' By Isha Sharma',
    date: '   25 Mar, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Best-YouTube-Channels-to-Learn-DevOps-from-Scratch-768x403.jpg',
    name: '9 Best YouTube Channels to Learn DevOps from Scratch',
    author: ' By Srinithi Sankar',
    date: '25 Mar, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Featured-image-Best-Way-to-Learn-DevOps-768x402.webp',
    name: 'How Long Will It Take to Learn DevOps?',
    author: ' By Lukesh S',
    date: '15 Apr, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/05/2202.i402.018.S.m004.c13.Devops-engineer-flat-composition-768x591.jpg',
    name: 'As a Software Engineer, How Do I Shift My Career to DevOps?',
    author: 'By Lahari Chandana',
    date: ' 16 Apr, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Non-Coding-Jobs-in-DevOps-768x366.png',
    name: 'Top High-Paying Non-Coding Jobs in DevOps [2024]',
    author: 'By Isha Sharma',
    date: ' 12 Apr, 2024'
  }
  

]

const CyberSecuritynames = [
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png',
    name: 'Cybersecurity Vs Ethical Hacking: Top 10 Difference',
    author: ' By Tushar Vinocha',
    date: '16 Apr, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
    name: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
    author: 'By Jaishree Tomar',
    date: '26 Mar, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
    name: 'What Is Hacking? Types of Hacking & More',
    author: ' By Meghana D',
    date: '25 Mar, 2024'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png',
    name: '8 Different Types of Cybersecurity and Threats Involved',
    author: 'By Tushar Vinocha',
    date: '08 Sep, 2023'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif',
    name: 'What is Cybersecurity? Importance and its uses & the growing challenge...',
    author: 'By Tushar Vinocha',
    date: '04 Oct, 2023'
  },
  {
    img: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif',
    name: 'Is coding required for cybersecurity? If yes, how crucial is coding for cyb...',
    author: 'By Tushar Vinocha',
    date: '25 Mar, 2024'
  },

]

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={names.map((val) => (<Home {...val} />))} />
          <Route path='FullStackDevelopment' element={FullStackDevelopmentnames.map((val) => (<FullStackDevelopment  {...val} />))} />
          <Route path='DataScience' element={DataSciencenames.map((val) => (<DataScience  {...val} />))} />
          <Route path='Devops' element={Devopsnames.map((val) => (<Devops  {...val} />))} />
          <Route path='CyberSecurity' element={CyberSecuritynames.map((val) => (<CyberSecurity  {...val} />))} />
        </Route>
        <Route path='*' element={<h1>Invalid URL</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
