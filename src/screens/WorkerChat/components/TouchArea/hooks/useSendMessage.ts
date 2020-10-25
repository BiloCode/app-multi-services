import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../../../metadata/types";
import { setNewMessage } from "../../../../../redux/reducers/Chat/actions/async";
import useMessageInput from "./useMessageInput";

const useSendMessage = () => {
  const { messageText , ChangeMessageText } = useMessageInput();

  const dispatch = useDispatch();
  const { chat , user , auth } = useSelector<ReduxRootState, ReduxRootState>(state => state, shallowEqual);
  const { userAuthenticatioState } = auth;
  const { userInformation , workerInformation } = user;
  const { roomId , socket } = chat;
  
  const SendMessage = () => {
    if(!socket) return;

    const userId = userAuthenticatioState === 'authentication-user' ? userInformation.id! : workerInformation.user?.id!;
    
    const payload = {
      roomId,
      message : messageText,
      userId
    }
    
    dispatch(setNewMessage(socket, payload));
    ChangeMessageText('');
  }

  return {
    SendMessage,
    messageText,
    ChangeMessageText
  }
}

export default useSendMessage;