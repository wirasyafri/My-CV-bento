import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/wirasyafri',
  linkedin: 'https://www.linkedin.com/in/syafri-wira-wicaksana-99a22b192/',
  mail: 'mailto:wirasyafri1998@gmail.com',
  instagram: 'https://www.instagram.com/syfrwrwcksn/',
  medium: 'https://ladvace.medium.com/',
  discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'D-IV Teknik Informatika',
    institution: 'Politeknik Negeri Malang',
    link: 'https://www.polinema.ac.id/',
    date: '2015 - 2019',
  },
  {
    title: 'Magister of Computer Science',
    institution: 'Brawijaya University',
    link: 'https://www.ub.ac.id/',
    date: '2022 - current',
  },
]

export const EXPERIENCE = [
  {
    company: 'PT Inti Daya Energitama',
    location: 'Sidoarjo, Indonesia',
    position: 'Software Engineer',
    start: '2020',
    link: 'https://idetama.id//',
    end: 'Current',
    tasks: [
      'Development and build of WEB',
    ],
  },
  // {
  //   company: 'Spot2',
  //   location: 'Mexico City, Mexico',
  //   position: 'Software Engineer',
  //   link: 'https://spot2.mx/',
  //   start: '2021',
  //   end: 'Current',
  //   tasks: [
  //     'Development of the Spot2 platform with the use of React, Redux, and Material UI',
  //     'Development map with the use of Google Maps API',
  //     'Development internal platform with the use of React, Redux, and Material UI',
  //     'Testing and debugging',
  //   ],
  // },
]
