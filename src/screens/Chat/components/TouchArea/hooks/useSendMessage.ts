import { Alert } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../../../metadata/types";
import { addNewMessage } from "../../../../../redux/reducers/Chat/actions/sync";
import useScrollToEndMessageList from "../../../hooks/useScrollToEndMessageList";
import useMessageInput from "./useMessageInput";

const useSendMessage = () => {
  const { messageText , ChangeMessageText } = useMessageInput();
  const scrollToEnd = useScrollToEndMessageList();

  const dispatch = useDispatch();
  const { chat , user , auth } = useSelector<ReduxRootState, ReduxRootState>(state => state, shallowEqual);
  const { userAuthenticationState } = auth;
  const { userInformation , workerInformation } = user;
  const { roomId , socket , isJoinRoom } = chat;

  const userAuthIsWorker = userAuthenticationState === 'authentication-worker';
  
  const SendMessage = () => {
    const formatMessage = messageText.trim();
    if(!formatMessage || !isJoinRoom){
      Alert.alert(
        'Mensaje en blanco',
        'No puede enviar un mensaje en blanco.',
        [ { text : 'Entendido' } ]
      );
      return;
    }

    const userId = !userAuthIsWorker ? userInformation.id : workerInformation.user.id;
    const message = {
      roomId,
      message : formatMessage,
      userId
    }

    //Crear el mensaje
    socket?.emit('send-message', message);

    ChangeMessageText('');

    //Evento de escucha del mensaje
    socket?.on('send-message-success', msg => {
      dispatch(addNewMessage(msg));
      scrollToEnd();
    });

    //Si ocurre un error
    socket?.on('send-message-fail', () => {
      alert('Ocurrio un error en el servidor...');
    })
  }

  return {
    SendMessage,
    messageText,
    ChangeMessageText,
    isJoinRoom
  }
}

export default useSendMessage;