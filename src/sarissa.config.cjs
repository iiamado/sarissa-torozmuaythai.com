export default {
  //Web site title. It is visible in sidebar and browser
  siteTitle: "Toro Z Muay Thai",
  //Web site desciption. It is visible in sidebar. Also added head meta data.
  siteDescription: "8500 Fruitridge Rd, Sacramento, CA 95826",
  //Web site favicon
  favicon: "/favicon.png",
  //Web site image. It is visible in sidebar
  siteImagePath: "/images/torozlogo.png",
  //Override footer text.
  footer: "© 2022 Toro Z Muay Thai",
  //Site global date format. [Luxon](https://moment.github.io/luxon/#/parsing?id=table-of-tokens)
  dateFormat: "dd.MM.yyyy HH:mm",
  //Add social media name to visible sidebar
  socialMedia: {
    facebook: "profile.php?id=100082811542660",
    twitter: "ismailozcelik",
    instagram: "toroz_muay_thai2022",
    github: "iiamado/torozmuaythai.com",
  },
  //Default page size for home page, category and archive
  pageSize: 5,
  //Customize category. Name is requried.
  //color for button and badges
  //image: if category layout is card, image shown at background in card.
  //order: override order of category
  categories: [
    {
      name: "theme",
      color: "btn-warning",
      image: "/images/theme.jpg",
      order: 1,
    },
  ],
  //Deafult category settings
  //order: categories can be ordered by name and count except overrided categories
  //layout: card and button
  //image: if category layout is card, image shown at background in card.
  //color: for button and badges
  //countVisibility: category has how many post shown on button or card
  categorySettings: {
    order: "name", // name | count
    layout: "card", //button | card
    image: "",
    color: "btn-primary",
    countVisibility: true,
  },
  //fuse.js search options. Detail information at [fuse.js](https://fusejs.io/api/options.html)
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
    ],
  },
  //Customize the labels
  menu: {
    home: "Home",
    about: "About Us",
    contact: "Contact Us",
    news: "News",
    search: "Search",
    archive: "Archive",
  },
  //Translate labels
  i18n: {
    search: {
      placeholder: "Search post title and description...",
    },
    archive: {
      select: "Select Year",
    },
    page: "Page",
    resultFound: " result(s) found",
  },
};
