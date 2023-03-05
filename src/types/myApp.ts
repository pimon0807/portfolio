export type myApp = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  appUrl: string;
  repoUrl: string;
  icon: img;
  usedTech: string;
  logo: img;
  demo1: img;
  demo2: img;
  demo3: img;
};

export type img = {
  url: string;
  height: number;
  width: number;
};

export type cmsProfile = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  profileImage: img;
  introductionText: string;
  address: string;
  dateOfBirth: string;
  programingSkills: string;
  otherSkills: string;
  hobby: string;
  qualifications: string;
};

export type cmsResume = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  companyName: string;
  years: string;
  occupation: string;
  discription: string;
};
