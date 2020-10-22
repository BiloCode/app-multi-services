import { addNewMessage, setMessages, setRoomId } from './sync';

interface IRequestData {
  socket : SocketIOClient.Socket;
  workerId : number;
  userId : number;
}

export const getMessagesList = (data : IRequestData) => dispatch => {
  const { socket , userId , workerId } = data;

  dispatch(setMessages([]));

  socket.emit('join-room',{ userId, workerId });

  socket.on('send-room-data', data => {
    const { _id , messageList } = data;

    dispatch(setRoomId(_id));
    dispatch(setMessages(messageList));
  });
};

interface IMessageData {
  roomId : string;
  userId : number;
  message : string;
}

export const setNewMessage = (socket : SocketIOClient.Socket, message : IMessageData) => dispatch => {
  socket.emit('send-message', message);

  socket.on('send-message-success', msg => {
    console.log(msg);
    dispatch(addNewMessage(msg));
  });

  socket.on('send-message-fail', () => {
    console.log('Ocurrio un error en el servidor...');
  })
}