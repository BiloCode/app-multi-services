import { shallowEqual, useSelector } from "react-redux"
import { ReduxRootState } from "../../../../../metadata/types"

const useMessageListInit = () => {
  //Redux
  const { user , chat , auth } = useSelector<ReduxRootState, ReduxRootState>(state => state,shallowEqual);
  const { userInformation , workerInformation } = user;
  const { userAuthenticatioState } = auth;
  const { isLoadingMessages , messagesList } = chat;

  return {
    messagesList,
    isLoadingMessages,
    userId : userAuthenticatioState === 'authentication-user' ? userInformation.id! : workerInformation.user?.id!
  }
}

export default useMessageListInit;