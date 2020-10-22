import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ReduxRootState } from "../../../../../metadata/types"
import { getMessagesList } from "../../../../../redux/reducers/Chat/actions/async";

const useMessageListInit = () => {
  //Redux
  const { user , chat , auth } = useSelector<ReduxRootState, ReduxRootState>(state => state,shallowEqual);
  const { userInformation , workerInformation } = user;
  const { userAuthenticatioState } = auth;
  const { isLoadingMessages , messagesList , socket , userData } = chat;

  const dispatch = useDispatch();

  const isSpeaker = () => userData.userType;

  useEffect(() => {
    if(socket){
      const userId = isSpeaker() === 'user' ? userData.id : userInformation.id!;
      const workerId = isSpeaker() === 'worker' ? userData.id : workerInformation.id!;

      dispatch(getMessagesList({ socket, userId, workerId }));
    }
  },[]);

  return {
    messagesList,
    isLoadingMessages,
    userId : userAuthenticatioState === 'authentication-user' ? userInformation.id! : workerInformation.id!
  }
}

export default useMessageListInit;