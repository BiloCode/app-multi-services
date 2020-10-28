export interface IStar {
  name : 'staro' | 'star';
}

export interface ILocate {
  id : number;
  name : string;
  location : string;
}

export interface IDistrict extends ILocate {
  province : ILocate
}