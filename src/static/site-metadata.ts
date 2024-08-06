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
  siteUrl: 'https://run.writely.xyz/',
  logo: 'https://im.gurl.eu.org/file/270443bebcfe0ede371b0.jpg',
  description: 'Running Map',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Home',
      url: 'https://run.writely.xyz/',
    }
  ],
};

export default data;
