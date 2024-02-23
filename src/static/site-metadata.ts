interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://workout-dev.vercel.app',
  logo: 'https://telegra.ph/file/557c307e1148b137ede17.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://dogwin.top',
    },
    {
      name: 'About',
      url: 'https://github.com/9104c',
    },
  ],
};

export default data;
