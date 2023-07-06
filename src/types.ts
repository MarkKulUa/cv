import { Dispatch, SetStateAction } from 'react';

export interface IAuth {
  isAuth: boolean;
  email: string | null;
}

export interface IEnv {
  readonly apiKey: string;
  readonly authDomain: string;
  readonly projectId: string;
  readonly storageBucket: string;
  readonly messagingSenderId: string;
  readonly appId: string;
  readonly measurementId: string;
}

export interface IUser {
  id?: string;
  name: string | null;
  email: string | null;
}
export interface IFormLogin {
  id?: string;
  email: string;
  password: string;
}

export interface IFormRegister {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export interface IConfig {
  language: TAppLanguage;
}

export const AppLanguages = ['en', 'pl', 'ua'] as const;

export type TAppLanguage = (typeof AppLanguages)[number];

export interface GraphQLRequest {
  query: string;
  variables?: string;
  headers: RequestHeader[];
}

export interface RequestHeader {
  id: string;
  key: string;
  value: string;
}

export type ArgumentInfo = {
  name: string;
  description: string | null | undefined;
  type: string;
};
export type FieldInfo = {
  name: string;
  description: string | null | undefined;
  type: string;
  variables?: ArgumentInfo[];
};

export type TypeInfo = {
  type: string;
  description: string | null | undefined;
  fields: FieldInfo[] | undefined;
  types: TypeInfo[] | undefined;
};
export type SchemaData = {
  fields?: FieldInfo[] | string | undefined | null;
};

export interface ICardFeature {
  img: string;
  featureName: string;
}

export interface IMenuContext {
  isOpen: boolean;
  setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export interface ICvStudyCard {
  img: string;
  name: string;
  description: string;
}
