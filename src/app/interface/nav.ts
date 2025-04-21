import { name } from './../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
export interface Nav {
  name: string;
  url?: string;
  icon: string;
  active: boolean;
  subMenu?: Nav[];
}
