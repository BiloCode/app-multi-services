export namespace NSHeaderNavigation {
  export interface IPropsTitle {
    title : string;
  }

  export interface IPropsInputSearch {
    onChangeText?(text : string);
  }

  export interface IPropsUserData {
    fullName : string;
    profileImage : string;
  }
}