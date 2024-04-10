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
  siteTitle: 'Running Map',
  siteUrl: 'https://runc.vercel.app/',
  logo: 'https://ossk.cc/file/6b89f83f50c92fd9199ab.png',
  description: 'Running Map',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Home',
      url: 'https://runc.vercel.app/',
    }，
  ],
};

export default data;
