export namespace NSHeaderNavigation {
  export interface IPropsTitle {
    title : string;
  }

  export interface IPropsInputSearch {
    onChangeText?(text : string);
    onPressButton();
  }

  export interface IPropsUserData {
    fullName : string;
    profileImage : string;
  }
}