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
  logo: 'https://i3.mjj.rip/2024/06/16/61a9deabd641bb62c909114050a6a4d9.jpeg',
  description: 'Workouts Map',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Home',
      url: 'https://run.writely.xyz/',
    }
  ],
};

export default data;
