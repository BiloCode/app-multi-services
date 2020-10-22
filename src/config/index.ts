import Axios from "axios";

export const Server = 'http://192.168.1.9:3000';

export const App = Axios.create({
  baseURL : `${Server}/app`
});