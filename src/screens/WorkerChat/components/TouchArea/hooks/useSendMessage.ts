import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../../../metadata/types";
import { setNewMessage } from "../../../../../redux/reducers/Chat/actions/async";
import useMessageInput from "./useMessageInput";

const useSendMessage = () => {
  const { messageText , ChangeMessageText } = useMessageInput();

  const dispatch = useDispatch();
  const { chat , user } = useSelector<ReduxRootState, ReduxRootState>(state => state, shallowEqual);
  const { userInformation } = user;
  const { roomId , socket } = chat;
  

  const SendMessage = () => {
    if(!socket) return;
    
    const payload = {
      roomId,
      message : {
        userId : userInformation.id,
        message : messageText
      }
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