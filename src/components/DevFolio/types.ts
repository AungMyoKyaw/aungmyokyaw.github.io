// src/components/DevFolio/types.ts
// This file is generated to be compliant with @config/devfolio.schema.json

export interface Basics {
  name: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: {
    address?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    region?: string;
  };
  profiles?: Profile[];
}

export interface Profile {
  network?: string;
  username?: string;
  url?: string;
  id?: string;
}

export interface Work {
  name?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  type?:
    | 'full-time'
    | 'part-time'
    | 'contract'
    | 'freelance'
    | 'internship'
    | 'volunteer';
  remote?: boolean;
  technologies?: string[];
  teamSize?: number;
  location?: string;
}

export interface Project {
  name: string;
  description?: string;
  highlights?: string[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url?: string;
  repository?: string;
  demo?: string;
  type?: 'personal' | 'professional' | 'open-source' | 'academic' | 'freelance';
  status?: 'completed' | 'in-progress' | 'on-hold' | 'cancelled';
  technologies?: string[];
  role?: string;
  teamSize?: number;
  organization?: string;
}

export interface Education {
  institution: string;
  url?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  score?: string;
  courses?: string[];
  honors?: string[];
  activities?: string[];
  location?: string;
}

export interface Mooc {
  courseTitle: string;
  type: 'Course' | 'Bundle' | 'Specialization';
  status: 'Completed' | 'In Progress' | 'Not Started';
  certificateLink?: string;
  provider?: string;
  startDate?: string;
  completionDate?: string;
  courses?: MoocCourse[];
  skills?: string[];
  duration?: number;
  instructors?: string[];
}

export interface MoocCourse {
  title: string;
  certificateLink?: string;
  completionDate?: string;
  description?: string;
  skills?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  expirationDate?: string;
  url?: string;
  badgeUrl?: string;
  certificationId?: string;
  description?: string;
  skills?: string[];
  level?: 'foundation' | 'associate' | 'professional' | 'expert' | 'master';
}

export interface Award {
  title: string;
  date?: string;
  awarder?: string;
  summary?: string;
  category?:
    | 'academic'
    | 'professional'
    | 'community'
    | 'technical'
    | 'leadership'
    | 'innovation'
    | 'other';
  level?:
    | 'international'
    | 'national'
    | 'regional'
    | 'local'
    | 'organizational';
  url?: string;
}

export interface Achievement {
  title: string;
  date?: string;
  issuer?: string;
  summary?: string;
  category?:
    | 'technical'
    | 'leadership'
    | 'innovation'
    | 'performance'
    | 'recognition'
    | 'other';
  url?: string;
}

export interface Skill {
  name: string;
  level?:
    | 'beginner'
    | 'novice'
    | 'intermediate'
    | 'advanced'
    | 'expert'
    | 'master';
  category?:
    | 'programming-languages'
    | 'frameworks'
    | 'libraries'
    | 'databases'
    | 'tools'
    | 'platforms'
    | 'methodologies'
    | 'soft-skills'
    | 'design'
    | 'testing'
    | 'devops'
    | 'mobile'
    | 'web'
    | 'data-science'
    | 'machine-learning'
    | 'blockchain'
    | 'security'
    | 'cloud'
    | 'other';
  yearsOfExperience?: number;
  keywords?: string[];
  lastUsed?: string;
  certifications?: string[];
  rating?: number;
}

export interface Language {
  language: string;
  fluency?:
    | 'elementary'
    | 'limited-working'
    | 'professional-working'
    | 'full-professional'
    | 'native-bilingual'
    | 'A1'
    | 'A2'
    | 'B1'
    | 'B2'
    | 'C1'
    | 'C2';
  speaking?: Language['fluency'];
  writing?: Language['fluency'];
  reading?: Language['fluency'];
  listening?: Language['fluency'];
  certifications?: {
    name: string;
    score?: string;
    date?: string;
    url?: string;
  }[];
  native?: boolean;
}

export interface Interest {
  name: string;
  keywords?: string[];
  category?:
    | 'technology'
    | 'sports'
    | 'arts'
    | 'music'
    | 'travel'
    | 'reading'
    | 'gaming'
    | 'photography'
    | 'cooking'
    | 'fitness'
    | 'volunteering'
    | 'education'
    | 'science'
    | 'business'
    | 'other';
  level?: 'casual' | 'hobby' | 'passionate' | 'professional';
  description?: string;
}

export interface Volunteer {
  organization: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  cause?: string;
}

export interface Publication {
  name: string;
  publisher?: string;
  releaseDate?: string;
  url?: string;
  doi?: string;
  summary?: string;
  type?:
    | 'journal-article'
    | 'conference-paper'
    | 'book'
    | 'book-chapter'
    | 'thesis'
    | 'patent'
    | 'blog-post'
    | 'white-paper'
    | 'case-study'
    | 'technical-report'
    | 'other';
  authors?: string[];
  keywords?: string[];
  citations?: number;
  venue?: string;
  volume?: string;
  pages?: string;
}

export interface Speaking {
  title: string;
  event?: string;
  organizer?: string;
  date?: string;
  location?: string;
  url?: string;
  presentationUrl?: string;
  slidesUrl?: string;
  videoUrl?: string;
  description?: string;
  audienceSize?: number;
  type?:
    | 'keynote'
    | 'conference-talk'
    | 'workshop'
    | 'panel'
    | 'webinar'
    | 'podcast'
    | 'interview'
    | 'meetup'
    | 'internal-presentation'
    | 'other';
  topics?: string[];
}

export interface Media {
  title: string;
  outlet?: string;
  date?: string;
  url?: string;
  description?: string;
  type?:
    | 'interview'
    | 'article'
    | 'podcast'
    | 'video'
    | 'tv-appearance'
    | 'radio'
    | 'quote'
    | 'feature'
    | 'profile'
    | 'other';
  topics?: string[];
}

export interface Patent {
  title: string;
  patentNumber?: string;
  filingDate?: string;
  grantDate?: string;
  office?: string;
  url?: string;
  summary?: string;
  inventors?: string[];
  status?: 'pending' | 'granted' | 'expired' | 'abandoned';
  applicationNumber?: string;
}

export interface Reference {
  name: string;
  reference?: string;
  position?: string;
  company?: string;
  relationship?:
    | 'manager'
    | 'colleague'
    | 'direct-report'
    | 'client'
    | 'mentor'
    | 'professor'
    | 'peer'
    | 'other';
  contact?: {
    email?: string;
    phone?: string;
    linkedin?: string;
  };
  date?: string;
  url?: string;
}

export interface Meta {
  lastModified?: string;
  version?: string;
  theme?: string;
  visibility?: 'public' | 'private' | 'unlisted';
  custom?: Record<string, unknown>;
}

export interface DevFolio {
  basics?: Basics;
  work?: Work[];
  projects?: Project[];
  education?: Education[];
  moocs?: Mooc[];
  certifications?: Certification[];
  awards?: Award[];
  achievements?: Achievement[];
  skills?: Skill[];
  languages?: Language[];
  interests?: Interest[];
  volunteer?: Volunteer[];
  publications?: Publication[];
  speaking?: Speaking[];
  media?: Media[];
  patents?: Patent[];
  references?: Reference[];
  meta?: Meta;
}
