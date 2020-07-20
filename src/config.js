module.exports = {
  siteTitle: 'Charles Zhang | Software Engineer',
  siteDescription:
    'I am a Softawre Engineer that is graduating from Mcmaster University SFWR ENG program. I have been studied and worked in this area for 3 years.',
  siteKeywords:
    'Chales Zhang, Charles, Zhang, software engineer, back-end engineer',
  siteUrl: 'https://charleszhang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Charles Zhang',
  location: 'Toronto, ON',
  email: 'zhans22@mcmaster.ca',
  github: 'https://github.com/charlesZ-byte',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/charlesZ-byte',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shuming-zhang-b33979149/',
    },
    {
      name: 'Instagram',
      url: 'https://github.com/charlesZ-byte',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
