export interface ClientResponseData {
  first: number;
  prev: number | null;
  next: number | null;
  last: number | null;
  items: number;
  data: Client[];
}

export interface Client {
  id: number;
  isActive: boolean;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: Gender;
  company: string;
  email: string;
  phone: string;
  address: string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

