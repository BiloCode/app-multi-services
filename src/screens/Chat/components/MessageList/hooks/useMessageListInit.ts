import { useContext, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux"
import { ReduxRootState } from "../../../../../metadata/types"
import { MessageListScrollContext } from "../../../context/MessageListScroll";
import useScrollToEndMessageList from "../../../hooks/useScrollToEndMessageList";

const useMessageListInit = () => {
  //Redux
  const { user , chat , auth } = useSelector<ReduxRootState, ReduxRootState>(state => state,shallowEqual);
  const { userInformation , workerInformation } = user;
  const { userAuthenticationState } = auth;
  const { isLoadingMessages , messagesList } = chat;

  //Context
  const { scrollView } = useContext(MessageListScrollContext);
  const scrollToEnd = useScrollToEndMessageList();

  useEffect(() => {
    scrollToEnd();
  });

  return {
    messagesList,
    isLoadingMessages,
    userId : userAuthenticationState === 'authentication-user' ? userInformation.id! : workerInformation.user?.id!,
    scrollView
  }
}

export default useMessageListInit;