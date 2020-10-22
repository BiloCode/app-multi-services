import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { SocketStartConnection } from "../../../redux/reducers/Chat/actions/sync";
import { ChatMetadata } from "../../../redux/reducers/Chat/metadata";

const useSocketInit = () => {
  const { socketLoading } = useSelector<ReduxRootState,ChatMetadata.IStore>(({ chat }) => chat, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SocketStartConnection());
  },[]);

  return {
    socketLoading
  }
}

export default useSocketInit;