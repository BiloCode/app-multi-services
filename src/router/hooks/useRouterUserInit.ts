import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SocketStartConnection } from "../../redux/reducers/Chat/actions/sync";
import { getSpecialties } from "../../redux/reducers/Specialty/actions/async";

const useRouterUserInit = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getSpecialties());
    dispatch(SocketStartConnection());
  },[]);
}

export default useRouterUserInit;