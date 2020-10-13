const TYPES = {
  SET_USER_INFORMATION : 'set-user-information'
}

export namespace UserMetadata {
  interface ILocate {
    id : number;
    name : string;
  }

  interface IDistrict extends ILocate {
    province : ILocate
  }

  export interface IUser {
    id : number;
    fullName : string;
    profileImage : string;
    createdAt : string;
    description : string;
    district : IDistrict
  }

  export interface IStore {
    userInformation : IUser
  }

}

export default TYPES;