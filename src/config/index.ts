import Axios from "axios";

export const App = Axios.create({
  baseURL : 'http://192.168.1.8:5000/app'
});