import { App } from '../../../../config';
import { addNewMessage, chatResetData, setMessages, setRoomId } from './sync';

export const getMessagesList = (userWorkerId : number, userId : number) => async dispatch => {
  try {
    const request = await App.post('/user/join/room', new URLSearchParams({
      userWorkerId : String(userWorkerId),
      userId : String(userId)
    }));

    const { room } = request.data;
    const { _id , messageList } = room;

    console.log(_id);

    dispatch(setRoomId(_id));
    dispatch(setMessages(messageList));
  }catch(e){
    console.log(e);
  }
}

export const joinRoom = (socket : SocketIOClient.Socket, roomId : string) => dispatch => {
  socket.emit('join-room', { roomId });
}

export const leaveRoom = (socket : SocketIOClient.Socket, roomId : string) => dispatch => {
  socket.emit('leave-room', { roomId });
  dispatch(chatResetData());
}

interface IMessageData {
  roomId : string;
  userId : number;
  message : string;
}

export const setNewMessage = (socket : SocketIOClient.Socket, message : IMessageData) => dispatch => {
  socket.emit('send-message', message);

  socket.on('send-message-success', msg => {
    dispatch(addNewMessage(msg));
  });

  socket.on('send-message-fail', () => {
    console.log('Ocurrio un error en el servidor...');
  })
}