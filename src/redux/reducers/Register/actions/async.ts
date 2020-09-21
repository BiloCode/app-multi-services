import { App } from "../../../../config";
import { setDeparments, setFilterDistrict, setFilterProvince } from "./sync";

export const getDepartments = () => async dispatch => {
  try {
    const request = await App.get('/department');
    const { deparments } = request.data;

    let departmentsFilter : any = [];

    if(deparments){
      departmentsFilter = [{ id : 0 , name : 'Selecciona un Departamento...' }, ...deparments];
    }
    
    dispatch(setDeparments(departmentsFilter));
  }catch(e){
    console.log(e);
  }
}

export const getProvincesByDepartment = (departmentId : number) => async dispatch => {
  try {
    const request = await App.get(`/province/department/${departmentId}`);
    const { provinces } = request.data;

    let provincesFilter : any = [];

    if(provinces){
      if(provinces.length){
        provincesFilter = [{ id : 0, name : 'Selecciona una Provincia...' }, ...provinces];
      }
    }

    dispatch(setFilterProvince(provincesFilter));
  }catch(e){
    console.log(e);
  }
}

export const getDistrictByDeparment = (provinceId) => async dispatch => {
  try {
    const request = await App.get(`/district/province/${provinceId}`);
    const { districts } = request.data;

    let districtsFilter : any = [];

    if(districts){
      if(districts.length)
        districtsFilter = [{ id : 0, name : 'Selecciona una Provincia...' }, ...districts ];
    }

    dispatch(setFilterDistrict(districtsFilter));
  }catch(e){
    console.log(e);
  }
}