export interface Service {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  createdAt?: string;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
  CONSULTANT = 'strategy-consultant'
}
