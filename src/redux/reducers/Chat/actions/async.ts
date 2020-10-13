import { ChatMetadata } from '../metadata';
import { setMessages, setRoomId } from './sync';

export const getMessagesList = (socket : SocketIOClient.Socket , users : [number,number]) => dispatch => {
  dispatch(setMessages([]));

  socket.emit('join-room',{ users });

  socket.on('send-room-data', data => {
    const { _id , messages } = data;

    dispatch(setRoomId(_id));
    dispatch(setMessages(messages));
  });
};

interface IData {
  roomId : string;
  message : ChatMetadata.IMessageList
}

export const setNewMessage = (socket : SocketIOClient.Socket, data : IData) => dispatch => {
  socket.emit('send-message',data);

  socket.on('send-message-success', message => {
    console.log(message);
  });

  socket.on('send-message-fail', () => {
    console.log('Ocurrio un error en el servidor...');
  })
}