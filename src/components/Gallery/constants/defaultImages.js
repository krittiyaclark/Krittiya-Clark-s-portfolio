import full01 from '../../../assets/images/fulls/ViiHost-Soicial-Network-Web-Applicaton.png'
import full02 from '../../../assets/images/fulls/Kissane-Associates-image.png'
import full03 from '../../../assets/images/fulls/Pho-Thai-Express-Restaurant.png'
import full05 from '../../../assets/images/fulls/Pixel-Art-Project.png'
import full06 from '../../../assets/images/fulls/React Beach Resort.png'
import full07 from '../../../assets/images/fulls/Memory-Game.png'

import thumb01 from '../../../assets/images/thumbs/ViiHost-Soicial-Network-Web-Applicaton.png'
import thumb02 from '../../../assets/images/thumbs/Kissane-Associates-image.png'
import thumb03 from '../../../assets/images/thumbs/Pho-Thai-Express-Restaurant.png'
import thumb05 from '../../../assets/images/thumbs/Pixel-Art-Project.png'
import thumb06 from '../../../assets/images/thumbs/React Beach Resort.png'
import thumb07 from '../../../assets/images/thumbs/Memory-Game.png'

import React from 'react'

export const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full05,
    thumbnail: thumb05,
    caption: 'Pixel Art Project',
    description:
      'Pixel Art Maker JavaScript application. Creating pixels involves building grids and then coloring the grids in order to create individual pixels.',
    url: 'https://krittiyaclark.github.io/udacity-project-pixel-art-maker-vanila-JS',
  },
  {
    id: '2',
    source: full01,
    thumbnail: thumb01,
    caption: 'ViiHost - Social Network',
    technology: 'React, Semantic UI, Firebase & Redux',
    description:
      'Social network web application where the user can create an event based on categories, and the users can join and chat in the event. Just like all other social networks, the user can follow other users.',
    url: 'https://social-network-638c8.firebaseapp.com',
  },
  {
    id: '3',
    source: full02,
    thumbnail: thumb02,
    caption: 'Kissane Associates',
    description: 'Law firm in St. Albans, Vermont',
    technology: 'Gatsby, React-Bootstrap, DatoCMS, Netlify',
    url: 'https://www.kissaneassociates.com',
  },
  {
    id: '4',
    source: full03,
    thumbnail: thumb03,
    caption: 'Pho Thai Express',
    description: 'Authentic Thai Restaurant in Montpelier, Vermont',
    technology: 'Gatsby, CSS-Grid, Contentful, Netlify',
    url: 'https://www.phothaiexpress.com',
  },
  {
    id: '5',
    source: full06,
    thumbnail: thumb06,
    caption: 'React Beach Resort',
    description:
      'This is a responsive website built with React. It is a website that provides information about a beach resort, including room specifics and features for sorting. arranged in order of room type, price, features, and maximum occupancy.',
    url: 'https://beach-resort-react-app-live.netlify.app',
  },
  {
    id: '6',
    source: full07,
    thumbnail: thumb07,
    caption: 'Memory-Game',
    description:
      "Memory A game application was developed to check the user's level of memory. There is a deck of cards that features a variety of symbols.<br />Instructions<br /To select a card, just click on it. You'll be able to match cards in less time and with fewer moves. Rating out of stars: starts off at 3, then drops to 2 after 15 moves, and finally drops to 1 after more than 30 moves.",
    url: 'http://threatening-mass.surge.sh',
  },
]
