const TYPES = {
  SET_SPECIALTIES : 'set-specialties'
}

export namespace SpecialtyMetadata {
  export interface IStore {
    list : ISpecialty[];
  }

  export interface ISpecialty {
    id : number;
    name : string;
    image : string;
  }
}

export default TYPES;