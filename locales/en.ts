export default defineI18nLocale(() => {
  return {
    navigation: {
      home: 'home',
      projects: 'projects',
      aboutMe: 'about me',
      contact: 'contact',
    },
    projects: {
      title: 'My Projects',
      specto: {
        title: 'Specto',
        subtitle: 'commerce',
        description: `My own project is an online store based on Node.js,
          using Nuxt 3 for the web interface and NestJS for the server side. It implements basic features,
          including product pages, customizable products, wishlists and shopping cart.`,
      },
      any2text: {
        title: 'any2text',
        subtitle: 'transcription',
        description: `Project Work is a text transcription service based on Laravel 11.
          It offers features including multi-file translation, top-up,
          multi-language, and a referral system..`,
      },
      primeTime: {
        title: 'PrimeTime',
        subtitle: 'cinema',
        description: `As part of my work as a frontend developer on an online movie theater project, I was actively involved
          in discussing the architecture of the project. My responsibilities included advising the team on the selection of technologies
          and standards, as well as creating pages according to the needs of the user interface.`,
      },
      spotyFree: {
        title: 'Spotyfree',
        subtitle: 'streaming',
        description: `My own project, currently on hold, is an innovative
        music service. For the backend, I chose nestJS combined with GraphQL for query typing. The frontend is developed
        using Nuxt 3. One of the main advantages of the application is the presence of a dedicated player.`,
      },
      tags: {
        html: 'HTML',
        css: 'CSS',
        js: 'JavaScript',
        ts: 'Typescript',
        laravel: 'Laravel',
        nest: 'Nest',
        vue: 'Vue',
        nuxt: 'Nuxt',
        vuetify: 'Vuetify',
      },
      linkLabel: 'See project',
    },
    aboutMe: {
      title: 'About Me',
      biography: {
        name: 'Igor Prosvirnin',
        description: 'I\'m more than in love with Front-End.' +
        'My experience with web applications has made me extremely critical of design,' +
        'architecture, clean code, and many other resources.'
      },
      skillsList: {
        first: {
          title: 'I\'ve had expirence with',
        },
        second: {
          title: 'I have years of experience with',
        },
        third: {
          title: 'I work and study about',
        },
      },
    },
    contactMe: {
      title: 'contact me'
    },
    main: {
      title: 'front-end.web(developer)',
    },
  }
})
