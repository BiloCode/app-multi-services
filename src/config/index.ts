import Axios from "axios";

export const Server = 'http://192.168.1.8:3000';

export const App = Axios.create({
  baseURL : `${Server}/app`
});