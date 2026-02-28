import { Education, Experience } from '@/types/experience';

export const currentPosition = {
  started: new Date('2022-10-01'),
  title: 'Frontend\nDeveloper',
  company: 'Thingiverse',
  description: `Currently focused on modernizing the web architecture for the world's
  largest 3D printing community. Bridging legacy systems with modern
  React patterns.`,
  closingStatement:
    'Building the infrastructure for the next generation of makers.',
  location: 'Utrecht, NL',
  stack: ['React', 'TypeScript', 'SCSS'],
  projectSite: 'https://www.thingiverse.com',
};

export const languages = [
  {
    label: 'Dutch',
    value: 'Native_Level',
    status: 'DEFAULT',
    type: 'Primary_Language',
  },
  {
    label: 'English',
    value: 'C2_Proficiency',
    status: 'CERTIFIED',
    type: 'Secondary_Language',
  },
];

export const tools = [
  {
    category: 'Languages_&_Frameworks',
    items:
      'React, TypeScript, Vue.js, JavaScript, HTML, SASS/SCSS, CSS, NodeJS, SQL',
  },
  {
    category: 'Methodology_&_CMS',
    items: 'Agile/Scrum, UX/UI Design, Next.js, Contentful',
  },
  {
    category: 'Validation_Protocols',
    items: 'Unit testing (Jest, Cypress)',
  },
];

export const softSkills = [
  {
    label: 'Team_Integration',
    detail: 'Collaborative development within cross-functional teams',
  },
  {
    label: 'Detail_Precision',
    detail: 'Problem-oriented approach with a focus on high-fidelity output',
  },
  {
    label: 'Evolution_Logic',
    detail: 'Rapid knowledge acquisition and continuous growth mindset',
  },
];

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
        description:
          'Transitioning the platform following the acquisition by MyMiniFactory. Responsible for frontend development and providing technical support to the team during the transition phase.',
        startedAt: '2026-02-01',
        stack: ['React', 'TypeScript', 'Sass'],
        isHighlight: true,
        websiteUrl: 'https://www.thingiverse.com',
      },
    ],
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
        description:
          'Full-time focus on thingiverse.com. Modernized core React architecture and optimized performance.',
        startedAt: '2022-10-01',
        endedAt: '2026-01-31',
        stack: ['React', 'TypeScript', 'Sass'],
        isHighlight: true,
        websiteUrl: 'https://www.thingiverse.com',
      },
      {
        title: 'Software Developer',
        description:
          'Developed marketing and subscription-lifecycle web platforms using a headless architecture.',
        startedAt: '2021-10-01',
        endedAt: '2022-09-30',
        stack: ['React', 'TypeScript', 'Next.js', 'Contentful'],
      },
    ],
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
        description:
          'Contributed to new and existing products within the development team. Responsibilities spanned design, frontend, back-end, and unit testing. Also served as a mentor for an intern.',
        startedAt: '2018-09-01',
        endedAt: '2021-09-01',
        stack: ['Vue.js', 'Node.js', 'XDoc'],
      },
    ],
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
        description:
          'Developed a full-stack solution for caller ID recognition and contact history display for call center environments.',
        startedAt: '2018-02-01',
        endedAt: '2018-06-30',
        stack: ['AngularJS', 'TypeScript', 'C#'],
      },
    ],
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
        description:
          'Refined and expanded the product developed during the previous internship period.',
        startedAt: '2017-07-01',
        endedAt: '2017-08-31',
        stack: ['AngularJS', 'XDoc'],
      },
      {
        title: 'Intern',
        description:
          'Developed tools for processing and editing decision and rule tables within the management application.',
        startedAt: '2016-09-01',
        endedAt: '2017-01-31',
        stack: ['AngularJS', 'XDoc'],
      },
    ],
  },
];

export const educationHistory: Education[] = [
  {
    id: 'cpe-2023',
    type: 'certification',
    institution: 'Cambridge Assessment English',
    location: 'Rotterdam, NL',
    degree: 'Cambridge English: Proficiency (CPE)',
    startAt: '2023-11-01',
    endedAt: '2023-11-01',
    isHighlight: true,
    score: [
      { label: 'GRADE', value: 'A' },
      { label: 'OVERALL', value: '222' },
      { label: 'CEFR', value: 'C2' },
    ],
    details: [
      'Highest level English qualification (Level 3 Certificate)',
      'Demonstrated master-level command of the English language',
      'Certificate obtained',
    ],
  },
  {
    id: 'hu-bachelor',
    type: 'degree',
    institution: 'HU University of Applied Sciences Utrecht',
    location: 'Utrecht, NL',
    field: 'Software and Information Engineering',
    degree: 'Bachelor of Science (Informatica)',
    startAt: '2014-09-01',
    endedAt: '2018-07-31',
    isHighlight: true,
    isFeatured: true,
    details: [
      'Specialization: Frontend Development',
      'Minor: English Language and Culture',
      'Bachelor of Science degree obtained',
      'Graduated Cum Laude',
    ],
    honors: 'Cum_Laude_Verified',
  },
  {
    id: 'hu-pre-hbo',
    type: 'course',
    institution: 'HU University of Applied Sciences Utrecht',
    location: 'Utrecht, NL',
    degree: 'Pre-HBO Course',
    startAt: '2014-04-01',
    endedAt: '2014-07-31',
    details: [
      'Course: Introduction to programming with Java',
      'Successfully prepared for higher vocational education',
      'Certificate obtained',
    ],
  },
  {
    id: 'revius-havo',
    type: 'school',
    institution: 'Revius Lyceum',
    location: 'Doorn, NL',
    degree: 'HAVO (Higher General Continued Education)',
    startAt: '2009-09-01',
    endedAt: '2014-06-30',
    details: [
      'Profile: Nature & Technology / Nature & Health',
      'Key Subjects: Biology, Physics, Chemistry, Mathematics B & D',
      'Diploma obtained',
    ],
  },
];
