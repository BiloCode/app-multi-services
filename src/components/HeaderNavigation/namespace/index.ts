export namespace NSHeaderNavigation {
  export interface IPropsTitle {
    title : string;
  }

  export interface IPropsInputSearch {
    onChangeText?(text : string);
  }

  export const colors = {
    text : '#fff',
    background : 'blue'
  }
}