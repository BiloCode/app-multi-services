import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ReduxRootState } from "../../../../../metadata/types"

const useMessageListInit = () => {
  //Redux
  const data = useSelector<ReduxRootState, ReduxRootState>(state => state,shallowEqual);
  const { userInformation } = data.user;
  const { isLoadingMessages , messagesList } = data.chat;

  const dispatch = useDispatch();

  useEffect(() => {
    
  },[]);

  return {
    messagesList,
    isLoadingMessages,
    userId : userInformation.id
  }
}

export default useMessageListInit;