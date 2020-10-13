import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ReduxRootState } from "../../../../../metadata/types"
import { getMessagesList } from "../../../../../redux/reducers/Chat/actions/async";

const useMessageListInit = () => {
  //Redux
  const data = useSelector<ReduxRootState, ReduxRootState>(state => state,shallowEqual);
  const { userInformation } = data.user;
  const { isLoadingMessages , messagesList , socket , workerData } = data.chat;

  const dispatch = useDispatch();

  useEffect(() => {
    if(socket){
      const users : [number,number] = [
        userInformation.id,
        workerData.id
      ];

      dispatch(getMessagesList(socket,users));
    }
  },[]);

  return {
    messagesList,
    isLoadingMessages,
    userId : userInformation.id
  }
}

export default useMessageListInit;