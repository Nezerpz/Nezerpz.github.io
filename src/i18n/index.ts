import { useEffect, useState } from 'react';

export enum Languages {
  EN = 'en',
  NO = 'no',
}

export type TranslationMap = {
  aboutTitle: string;
  aboutDescription: string;
  aboutSkillsTitle: string;
  projectsTitle: string;
  projectsDescription: string;
  contactTitle: string;
  contactPhoneLabel: string;
  contactEmailLabel: string;
  contactDownloadCV: string;
  contactPhone: string;
  contactEmail: string;
};

const DOB = '31.10.02';

export const translations: Record<Languages, TranslationMap> = {
  [Languages.EN]: {
    aboutTitle: 'About Me',
    aboutDescription: `I am ${getAgeFromDOB(DOB)} years old and grew up in Førde. 
    I have a background as a data electronics technician and as an application developer. 
    In my spare time I like to play games, make music and hang out with friends.`,
    aboutSkillsTitle: 'Skills',
    projectsTitle: 'Projects',
    projectsDescription:
      'Below are some projects I worked on during school — click any project to view the repository.',
    contactTitle: 'Contact',
    contactPhoneLabel: 'Phone',
    contactEmailLabel: 'Email',
    contactDownloadCV: 'Download CV',
    contactPhone: '+47 913 31 063',
    contactEmail: 'henrik.aamot@pm.me',
  },
  [Languages.NO]: {
    aboutTitle: 'Om meg',
    aboutDescription: `Eg er ${getAgeFromDOB(DOB)} år gamal og har vakse opp i Førde. 
    Eg har bakgrunn som dataelektronikar og som applikasjonsutviklar. 
    I fritida likar eg å spele dataspel, lage musikk og vere med vener.`,
    aboutSkillsTitle: 'Ferdigheiter',
    projectsTitle: 'Prosjekter',
    projectsDescription:
      'Under finn du nokre prosjekt eg jobba med i løpet av skulen — klikk eit prosjekt for å sjå repoen.',
    contactTitle: 'Kontakt',
    contactPhoneLabel: 'Telefon',
    contactEmailLabel: 'E-post',
    contactDownloadCV: 'Last ned CV',
    contactPhone: '+47 913 31 063',
    contactEmail: 'henrik.aamot@pm.me',
  },
};

let currentLanguage: Languages = Languages.EN;


function getAgeFromDOB(dob: string): number {
  const parts = dob.split('.');
  if (parts.length < 3) return 0;
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const yearPart = parts[2];
  let year = parseInt(yearPart, 10);
  if (yearPart.length === 2) {
    year += 2000;
  }
  const today = new Date();
  const birth = new Date(year, month - 1, day);
  let age = today.getFullYear() - birth.getFullYear();
  const thisYearBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if (today < thisYearBirthday) age--;
  return age;
}

export function setLanguage(lang: Languages) {
  currentLanguage = lang;
  listeners.forEach((cb) => cb(lang));
}

type LanguageCallback = (lang: Languages) => void;
const listeners: LanguageCallback[] = [];

export function onLanguageChange(cb: LanguageCallback): () => void {
  listeners.push(cb);
  return () => {
    const i = listeners.indexOf(cb);
    if (i >= 0) listeners.splice(i, 1);
  };
}

export function useTranslation() {
  const [lang, setLang] = useState<Languages>(currentLanguage);

  useEffect(() => onLanguageChange((l) => setLang(l)), []);

  function translate(key: keyof TranslationMap) {
    return translations[lang][key];
  }

  return { lang, t: translate, setLanguage };
}
