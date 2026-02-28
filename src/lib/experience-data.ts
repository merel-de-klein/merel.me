import { Experience } from "@/types/experience";

export const currentPosition = {
  started: new Date('2022-10-01'),
  title: 'Frontend\nDeveloper',
  company: 'Thingiverse',
  description: `Currently focused on modernizing the web architecture for the world's
  largest 3D printing community. Bridging legacy systems with modern
  React patterns.`,
  closingStatement: 'Building the infrastructure for the next generation of makers.',
  location: 'Utrecht, NL',
  stack: ['React', 'TypeScript', 'SCSS'],
  projectSite: 'https://www.thingiverse.com',
};

export const workExperience: Experience[] = [
  {
    id: 'thingiverse-mmf',
    type: 'work',
    company: {
      name: 'Thingiverse (MyMiniFactory)',
      location: 'Utrecht, NL',
    },
    positions: [
      {
        title: 'Software Developer',
        description: 'Transitioning the platform following the acquisition by MyMiniFactory. Responsible for frontend development and providing technical support to the team during the transition phase.',
        startedAt: '2026-02-01',
        stack: ['React', 'TypeScript', 'Sass'],
        isHighlight: true,
        websiteUrl: 'https://www.thingiverse.com'
      }
    ]
  },
  {
    id: 'ultimaker',
    type: 'work',
    company: {
      name: 'UltiMaker',
      location: 'Utrecht, NL',
    },
    positions: [
      {
        title: 'Software Developer (Thingiverse)',
        description: 'Full-time focus on thingiverse.com. Modernized core React architecture and optimized performance.',
        startedAt: '2022-10-01',
        endedAt: '2026-01-31',
        stack: ['React', 'TypeScript', 'Sass'],
        isHighlight: true,
        websiteUrl: 'https://www.thingiverse.com'
      },
      {
        title: 'Software Developer',
        description: 'Developed marketing and subscription-lifecycle web platforms using a headless architecture.',
        startedAt: '2021-10-01',
        endedAt: '2022-09-30',
        stack: ['React', 'TypeScript', 'Next.js', 'Contentful'],
      }
    ]
  },
  {
    id: 'databalk',
    type: 'work',
    company: {
      name: 'DataBalk (formerly Kubion)',
      location: 'Utrecht, NL',
    },
    positions: [
      {
        title: 'Software Developer',
        description: 'Contributed to new and existing products within the development team. Responsibilities spanned design, frontend, back-end, and unit testing. Also served as a mentor for an intern.',
        startedAt: '2018-09-01',
        endedAt: '2021-09-01',
        stack: ['Vue.js', 'Node.js', 'XDoc'],
      }
    ]
  },
  {
    id: 'cc4skype',
    type: 'internship',
    company: {
      name: 'CC4Skype',
      location: 'Vianen, NL',
    },
    positions: [
      {
        title: 'Graduation Intern',
        description: 'Developed a full-stack solution for caller ID recognition and contact history display for call center environments.',
        startedAt: '2018-02-01',
        endedAt: '2018-06-30',
        stack: ['AngularJS', 'TypeScript', 'C#'],
      }
    ]
  },
  {
    id: 'kubion-early',
    type: 'internship',
    company: {
      name: 'Kubion',
      location: 'Utrecht, NL',
    },
    positions: [
      {
        title: 'Software Developer (Summer)',
        description: 'Refined and expanded the product developed during the previous internship period.',
        startedAt: '2017-07-01',
        endedAt: '2017-08-31',
        stack: ['AngularJS', 'XDoc'],
      },
      {
        title: 'Intern',
        description: 'Developed tools for processing and editing decision and rule tables within the management application.',
        startedAt: '2016-09-01',
        endedAt: '2017-01-31',
        stack: ['AngularJS', 'XDoc'],
      }
    ]
  }
];
