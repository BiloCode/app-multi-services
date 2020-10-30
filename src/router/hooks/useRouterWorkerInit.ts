import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SocketStartConnection } from "../../redux/reducers/Chat/actions/sync";

const useRouterWorkerInit = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(SocketStartConnection());
  },[]);
}

export default useRouterWorkerInit;