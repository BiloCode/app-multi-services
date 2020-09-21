import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getDepartments } from "../../../redux/reducers/Register/actions/async";

const useRegisterInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartments());
  },[]);
}

export default useRegisterInit;