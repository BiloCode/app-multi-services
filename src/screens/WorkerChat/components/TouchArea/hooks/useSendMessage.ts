import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../../../metadata/types";
import { addNewMessage } from "../../../../../redux/reducers/Chat/actions/sync";
import useMessageInput from "./useMessageInput";

const useSendMessage = () => {
  const { messageText , ChangeMessageText } = useMessageInput();
  const { userInformation } = useSelector<ReduxRootState, any>(({ user }) => user, shallowEqual);
  const dispatch = useDispatch();

  const SendMessage = () => {
    const payload = {
      text : messageText,
      id : userInformation.id
    }

    dispatch(addNewMessage(payload));
    ChangeMessageText('');
  }

  return {
    SendMessage,
    messageText,
    ChangeMessageText
  }
}

export default useSendMessage;