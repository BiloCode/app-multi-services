import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSpecialties } from "../../redux/reducers/Specialty/actions/async";

const useRouterUserInit = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getSpecialties());
  },[]);
}

export default useRouterUserInit;