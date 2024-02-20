// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'A-n-d-i-l-e', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: 'https://a-n-d-i-l-e.github.io/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'A-n-d-i-l-e/ReFiDAO-beta',
          'A-n-d-i-l-e/Deflate-Token',
          'A-n-d-i-l-e/taichi-ngp-renderer',
          'A-n-d-i-l-e/reentrancy-attacks',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Simentea',
          description:
            'A comprehensive data storage and analysis platform aimed at providing users with a robust solution for storing, managing, and analyzing their data. The platform harnesses modern web technologies, including Next.js for the frontend, IPFS for decentralized data storage, and various libraries for data visualization and analysis. Additionally, smart contract development was employed to store data securely on the blockchain.Utilized Next.js, a React-based framework, to build the frontend of the platform, ensuring high performance and scalability.Designed and implemented responsive and user-friendly UI components using Tailwind CSS, enhancing the overall user experience.',
          // imageUrl: 'https://ibb.co/vjyN9wk',
          link: 'https://www.simantea.com/',
        },
        {
          title: 'Bospay',
          description:
            'In my capacity as the Lead Developer at BOS.Pay™,I assumed a central role  in the projects inception and development, primarily focusing on backend architecture and deployment logistics. Here a breakdown of my key contributions Database Setup and Backend Connections: Upon joining the team in June of last year, I took charge of setting up the database infrastructure, meticulously ensuring its scalability and resilience to accommodate the demands of our payment application. Additionally, I established crucial backend connections, enabling seamless data exchange and communication across various components of the system. Azure Deployment Management: Leveraging my expertise in cloud computing, I orchestrated the deployment of our backend function app on Microsoft Azure, a pivotal step in ensuring the reliability and performance of our application. This involved fine-tuning Azure resources to guarantee optimal operational efficiency and responsiveness.Backend Development with TypeScript: Serving as the backbone of our application, the backend development process demanded meticulous attention to detail and precision. I led the implementation of backend logic and functionalities using TypeScript, crafting robust algorithms and integrating with external APIs to facilitate seamless interactions within the system. ',

          // imageUrl: 'https://ibb.co/7GSzHS1',
          link: 'https://play.google.com/store/apps/details?id=za.co.bostechnology.bospay',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Andile',
    description: 'Full Stack Developer',
    imageURL: '',
  },
  social: {
    linkedin: 'abstract-minds-web3/',
    twitter: 'AbstractMinds0x',
    // mastodon: 'arifszn@mastodon.social',
    // facebook: '',
    instagram: 'abstractminds.0x',
    // youtube: '', // example: 'pewdiepie'
    // dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: 'abstract-minds', // example: '1/jeff-atwood'
    telegram: '@AbstractMinds0x',
    website: '//www.abstractminds-web3.com/',
    phone: '+27670455039',
    email: 'ndlovuandile100@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Typescript',
    'Solidity',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Azure',
    'CSS',
    'Antd',
    'Tailwind',
    'Threejs',
    'Unity',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'BosPay',
      position: 'Senior Software Engineer',
      from: 'June 2023',
      to: 'Present',
      companyLink: 'https://bospay.co',
    },
    {
      company: 'Blockchain Miners Club (BMC)',
      position: 'Blockchain Developer',
      from: 'August 2021',
      to: 'February 2022',
      companyLink: 'https://opensea.io/collection/blockchainminersclubofficial',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  // educations: [
  //   {
  //     institution: 'Institution Name',
  //     degree: 'Degree',
  //     from: '2015',
  //     to: '2019',
  //   },
  //   {
  //     institution: 'Institution Name',
  //     degree: 'Degree',
  //     from: '2012',
  //     to: '2014',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cyberpunk',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  //

  enablePWA: false,
};

export default CONFIG;
