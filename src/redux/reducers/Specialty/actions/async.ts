import { App } from "../../../../config";
import { setSpecialtyInformation } from "./sync";

export const getSpecialties = () => async dispatch => {
  try {
    const specialties = await App.get('/specialty');
    console.log(specialties.data);
    dispatch(setSpecialtyInformation(specialties.data.specialty));
  }catch(e){
    console.log(e);
  }
}