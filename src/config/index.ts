import Axios from "axios";

export const App = Axios.create({
  baseURL : 'https://api-services-app.herokuapp.com/app'
});