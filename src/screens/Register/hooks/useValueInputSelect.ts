import { useState } from "react";
import { getDistrictByDeparment , getProvincesByDepartment } from '../../../redux/reducers/Register/actions/async';
import { useDispatch } from "react-redux";

const useValueInputSelect = () => {
  //Redux
  const dispatch = useDispatch();

  //Estados
  const [ name , setName ] = useState<string>('');
  const [ lastname , setLastname ] = useState<string>('');
  const [ departmentSelected , setDepartmentSelected ] = useState<number>(0);
  const [ provinceSelected , setProvinceSelected ] = useState<number>(0);
  const [ districtSelected , setDistrictSelected ] = useState<number>(0);

  const ChangeName = (value : string) => setName(() => value);
  const ChangeLastname = (value : string) => setLastname(() => value);

  const ChangeDepartment = (item : number, index) => {
    setDepartmentSelected(item);
    dispatch(getProvincesByDepartment(item));
  }

  const ChangeProvince = (item : number, index) => {
    setProvinceSelected(item);
    dispatch(getDistrictByDeparment(item))
  }

  const ChangeDistrict = (item : number, index) => setDistrictSelected(item);

  return {
    name,
    lastname,
    departmentSelected,
    provinceSelected,
    districtSelected,
    ChangeName,
    ChangeLastname,
    ChangeDepartment,
    ChangeProvince,
    ChangeDistrict
  }
}

export default useValueInputSelect;