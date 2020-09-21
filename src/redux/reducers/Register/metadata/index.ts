export enum TYPES {
  SET_DEPARTMENTS,
  SET_FILTER_PROVINCE,
  SET_FILTER_DISTRICT
}

export namespace RegisterMetadata {
  export interface IData {
    id : number;
    name : string;
  }

  export interface IStore {
    departmentData : IData[];
    provinceFilter : IData[];
    districtFilter : IData[];
  }
}