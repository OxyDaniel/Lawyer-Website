export interface TimelineMilestone {
  year: string;
  title: string;
  detail: string;
}

export interface ResearchStudyAsset {
  id: string;
  catalogueCode: string;
  src: string;
  alt: string;
  aspect: 'portrait' | 'landscape' | 'tall';
  featured?: boolean;
}

export const FIRM_ASSETS = {
  establishment: {
    establishment_1: {
      src: '/assets/aistudio/establishment_1_81933f03.JPG',
      alt: 'UNICEF — United Nations Children’s Fund institutional emblem from Austin Mamedu & Co. agency representation archive',
      title: 'UNICEF — United Nations Children’s Fund',
      category: 'UN Agency Mandate',
    },
    establishment_2: {
      src: '/assets/aistudio/establishment_2_64b9f40e.JPG',
      alt: 'Save the Children International institutional emblem from Austin Mamedu & Co. INGO representation archive',
      title: 'Save the Children International',
      category: 'INGO Advisory',
    },
    establishment_3: {
      src: '/assets/aistudio/establishment_3_5e9c253b.JPG',
      alt: 'Microsoft institutional emblem — registered in Nigeria by Austin Mamedu & Co. in 2000 as company secretary',
      title: 'Microsoft Nigeria Limited',
      category: 'Corporate Registration & Company Secretary (2000)',
    },
  },
  idl: {
    IDL_1: {
      src: '/assets/aistudio/IDL_1_8ff2d3d9.JPG',
      alt: 'Legislations for Development for African, Asian, Caribbean and Pacific Countries — I: Women & Children by Augustine Mamedu, Grosvenor House Publishing Limited',
      title: 'Legislations for Development — Vol. I: Women & Children',
      subtitle: 'Augustine Mamedu · Grosvenor House Publishing Limited',
    },
    IDL_2: {
      src: '/assets/aistudio/IDL_2_34f7c2b0.JPG',
      alt: 'Chartered Institute of Arbitrators (CIArb) emblem',
      title: 'Chartered Institute of Arbitrators (CIArb)',
      category: 'International Arbitration & Rule of Law',
    },
    IDL_3: {
      src: '/assets/aistudio/IDL_3_1dea13b1.JPG',
      alt: 'SOS Children’s Villages institutional emblem',
      title: 'SOS Children’s Villages',
      category: 'International Consulting',
    },
    IDL_4: {
      src: '/assets/aistudio/IDL_4_2453504c.JPG',
      alt: 'IOM — UN Migration institutional emblem',
      title: 'IOM — UN Migration',
      category: 'UN Agency Consulting',
    },
    IDL_5: {
      src: '/assets/aistudio/IDL_5_ddd0bd3e.JPG',
      alt: 'African Child Policy Forum (ACPF) institutional emblem',
      title: 'African Child Policy Forum (ACPF)',
      category: 'Policy & Legislative Consulting',
    },
  },
  lawyers: {
    lawyer_1: {
      src: '/assets/aistudio/lawyer_1_7687090d.JPG',
      alt: 'Portrait of Augustine Mamedu, Principal Solicitor at Austin Mamedu & Co.',
      title: 'Augustine Mamedu',
      caption: 'Principal Solicitor · Nigeria, England & Wales, Republic of Ireland',
    },
    lawyer_2: {
      src: '/assets/aistudio/lawyer_2_077f4a71.JPG',
      alt: 'Nigerian Bar Association seal — Promoting the Rule of Law',
      title: 'Nigerian Bar Association',
      caption: 'Called to the Nigerian Bar · 1986',
    },
    lawyer_3: {
      src: '/assets/aistudio/lawyer_3_1571a696.JPG',
      alt: 'Law Society of Ireland crest',
      title: 'Law Society of Ireland',
      caption: 'Admitted by the Supreme Court of Ireland · 2007',
    },
    lawyer_4: {
      src: '/assets/aistudio/lawyer_4_e010bff0.JPG',
      alt: 'The Law Society of England & Wales crest',
      title: 'The Law Society (England & Wales)',
      caption: 'Admitted by the Supreme Court of England & Wales · 2006',
    },
  },
  research: [
    {
      id: 'research_3',
      catalogueCode: 'STUDY I',
      src: '/assets/aistudio/research_3_78d1da9f.JPG',
      alt: 'Research study publication cover — Education Under Attack in Nigeria, Save the Children',
      aspect: 'tall',
      featured: true,
    },
    {
      id: 'research_1',
      catalogueCode: 'STUDY II',
      src: '/assets/aistudio/research_1_fdaedc4f.JPG',
      alt: 'Research study publication cover — The State of the Nigerian Girl Report II 2025',
      aspect: 'portrait',
    },
    {
      id: 'research_2',
      catalogueCode: 'STUDY III',
      src: '/assets/aistudio/research_2_a40f6c69.JPG',
      alt: 'Research study publication cover — Benue State Internally Displaced Persons (IDP) Policy',
      aspect: 'landscape',
    },
    {
      id: 'research_4',
      catalogueCode: 'STUDY IV',
      src: '/assets/aistudio/research_4_4eaec6b6.JPG',
      alt: 'Research study publication cover — State of the Nigerian Girl Report, October 2021',
      aspect: 'portrait',
    },
    {
      id: 'research_5',
      catalogueCode: 'STUDY V',
      src: '/assets/aistudio/research_5_172e0a9e.JPG',
      alt: 'Research study publication cover — Nigeria Child Justice Bottleneck Analysis, UNICEF Nigeria',
      aspect: 'portrait',
    },
    {
      id: 'research_6',
      catalogueCode: 'STUDY VI',
      src: '/assets/aistudio/research_6_7c61ae85.JPG',
      alt: 'Research study publication cover — Assessment on the Situation of Children in Conflict with the Law in Nigeria',
      aspect: 'landscape',
    },
    {
      id: 'research_7',
      catalogueCode: 'STUDY VII',
      src: '/assets/aistudio/research_7_e7fde452.JPG',
      alt: 'Research study publication cover — Family Courts Capacity Assessment',
      aspect: 'portrait',
    },
  ] as ResearchStudyAsset[],
};

export const ESTABLISHMENT_TIMELINE: TimelineMilestone[] = [
  {
    year: '1988',
    title: 'Establishment of Austin Mamedu & Co.',
    detail:
      'Founded by Augustine Mamedu with its first practice office at 3 Medical Road, Ikeja, Lagos, establishing a strong pedigree in maritime law and corporate services.',
  },
  {
    year: '2000',
    title: 'Registration of Microsoft Nigeria Limited and appointment as company secretary.',
    detail:
      'AM&Co. registered Microsoft Nigeria Limited in the year 2000 and served as its company secretary alongside representation of major corporate and international institutions.',
  },
  {
    year: 'Present',
    title: 'Principal office in Abuja.',
    detail:
      'Operating from 23 Okemesi Crescent, Garki II, Abuja, advising UN agencies, INGOs, corporate organisations, and private clients.',
  },
];

export const LAWYER_MILESTONES: TimelineMilestone[] = [
  {
    year: '1985',
    title: 'Graduated from the University of Benin.',
    detail: 'Completed undergraduate legal education at the University of Benin.',
  },
  {
    year: '1986',
    title: 'Called to the Nigerian Bar.',
    detail: 'Admitted to practice as a Barrister and Solicitor of the Supreme Court of Nigeria.',
  },
  {
    year: '2006',
    title: 'Admitted as a solicitor by the Supreme Court of England & Wales.',
    detail: 'Following legal studies in the United Kingdom including BPP University London.',
  },
  {
    year: '2007',
    title: 'Admitted as a solicitor by the Supreme Court of Ireland.',
    detail: 'Following legal studies at Griffith College Dublin and The Law School of The Law Society of Ireland.',
  },
];

export const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    quote:
      'No doubt a lot of industry was expended by the learned counsel, especially Augustine Mamedu. I quite commend him for the industry and the amount and level of work exhibited in this application',
    attribution: 'Hon. Justice A.N. Ehigiamusoe.',
  },
  {
    id: 'testimonial-2',
    quote:
      'I wish to confirm that I found Augustine Mamedu to be a very good and diligent worker, bright, intelligent and with a pleasant and co-operative manner. I have remained in contact with Augustine, and I find him to be of good character.',
    attribution: 'James K. Quinn, Solicitor, Longford, Republic of Ireland.',
  },
];

export const ASSOCIATES = [
  {
    id: 'habiba-saddiq',
    monogram: 'HS',
    name: 'Habiba Saddiq',
    qualifications: 'LL.B, BL, LL.M',
  },
  {
    id: 'favourite-okoronma',
    monogram: 'FO',
    name: 'Favourite Okoronma',
    qualifications: 'LL.B, BL',
  },
];

export const CONTACT_INFO = {
  address: '23 Okemesi Crescent, Garki II, Abuja, Nigeria',
  phoneDisplay: '0911 90 42421',
  phoneHref: 'tel:09119042421',
  primaryEmail: 'post@austinmamedulaw.com',
  secondaryEmail: 'austin.mamedu@gmail.com',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=23+Okemesi+Crescent+Garki+II+Abuja+Nigeria',
};
