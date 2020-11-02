import Axios from "axios";

export const Server = 'http://192.168.1.9:3000';

export const App = Axios.create({
  baseURL : `${Server}/app`
});

export const colors = {
  main : '#E50914',
  mainSmoothed : '#FF394C',
  icon : '#3F3F3F',
  text : '#A5A4A4',
  paragraph : '#878787',
  stars : '#FFDB29',
  bgMainOpacited : '#FCF0F4'
}