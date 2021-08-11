"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_IMAGES = void 0;

var _ViiHostSoicialNetworkWebApplicaton = _interopRequireDefault(require("../../../assets/images/fulls/ViiHost-Soicial-Network-Web-Applicaton.png"));

var _KissaneAssociatesImage = _interopRequireDefault(require("../../../assets/images/fulls/Kissane-Associates-image.png"));

var _PhoThaiExpressRestaurant = _interopRequireDefault(require("../../../assets/images/fulls/Pho-Thai-Express-Restaurant.png"));

var _TodayPlanFullStackApp = _interopRequireDefault(require("../../../assets/images/fulls/Today-Plan-Full-Stack-App.png"));

var _ViiHostSoicialNetworkWebApplicaton2 = _interopRequireDefault(require("../../../assets/images/thumbs/ViiHost-Soicial-Network-Web-Applicaton.png"));

var _KissaneAssociatesImage2 = _interopRequireDefault(require("../../../assets/images/thumbs/Kissane-Associates-image.png"));

var _PhoThaiExpressRestaurant2 = _interopRequireDefault(require("../../../assets/images/thumbs/Pho-Thai-Express-Restaurant.png"));

var _TodayPlanFullStackApp2 = _interopRequireDefault(require("../../../assets/images/thumbs/Today-Plan-Full-Stack-App.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_IMAGES = [{
  id: '1',
  source: _TodayPlanFullStackApp["default"],
  thumbnail: _TodayPlanFullStackApp2["default"],
  caption: 'Today Plan - Todo Plan Full Stack App',
  technology: 'Node, MongoDB, Express, JavaScript, Azure, Bootstrap',
  description: "This application lets you easily add and delete your own authentication plans with Microsoft Azure's authentication system.",
  url: 'https://today-plan-fullstack-app.herokuapp.com'
}, {
  id: '2',
  source: _ViiHostSoicialNetworkWebApplicaton["default"],
  thumbnail: _ViiHostSoicialNetworkWebApplicaton2["default"],
  caption: 'ViiHost - Social Network',
  technology: 'React, Semantic UI, Firebase & Redux',
  description: 'Social network web application where the user can create an event based on categories, and the users can join and chat in the event. Just like all other social networks, the user can follow other users.',
  url: 'https://social-network-638c8.firebaseapp.com'
}, {
  id: '3',
  source: _KissaneAssociatesImage["default"],
  thumbnail: _KissaneAssociatesImage2["default"],
  caption: 'Kissane Associates',
  description: 'Law firm in St. Albans, Vermont',
  technology: 'Gatsby, React-Bootstrap, DatoCMS, Netlify',
  url: 'https://www.kissaneassociates.com'
}, {
  id: '4',
  source: _PhoThaiExpressRestaurant["default"],
  thumbnail: _PhoThaiExpressRestaurant2["default"],
  caption: 'Pho Thai Express',
  description: 'Authentic Thai Restaurant in Montpelier, Vermont',
  technology: 'Gatsby, CSS-Grid, Contentful, Netlify',
  url: 'https://www.phothaiexpress.com'
} // {
//   id: '4',
//   source: full04,
//   thumbnail: thumb04,
//   caption: 'Photo 4',
//   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   url: 'https://social-network-638c8.firebaseapp.com',
// },
// {
//   id: '5',
//   source: full05,
//   thumbnail: thumb05,
//   caption: 'Photo 5',
//   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   url: 'https://social-network-638c8.firebaseapp.com',
// },
// {
//   id: '6',
//   source: full06,
//   thumbnail: thumb06,
//   caption: 'Photo 6',
//   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   url: 'https://social-network-638c8.firebaseapp.com',
// },
];
exports.DEFAULT_IMAGES = DEFAULT_IMAGES;