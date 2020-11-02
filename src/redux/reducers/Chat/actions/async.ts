import { App } from '../../../../config';
import { setMessages, setRoomId, setUserChatList, setUserChatLoading } from './sync';

export const getMessagesList = (userWorkerId : number, userId : number) => async dispatch => {
  try {
    const request = await App.post('/user/join/room', new URLSearchParams({
      userWorkerId : String(userWorkerId),
      userId : String(userId)
    }));

    const { room } = request.data;
    const { _id , messageList } = room;

    if(room){
      dispatch(setRoomId(_id));
      dispatch(setMessages(messageList));
    }
  }catch(e){
    console.log(e);
  }
}

/** Chat List Screen */
export const getChatList = (isWorker : boolean, userId : number) => async dispatch => {
  dispatch(setUserChatLoading(true));

  try {
    const endpoint = isWorker ? '/worker/get/rooms' : '/user/get/rooms';
    const request = await App.post(endpoint, new URLSearchParams({ userId : String(userId) }));
    const { error , roomList } = request.data;

    if(error) alert(error);
    else{
      dispatch(setUserChatList(roomList));
      dispatch(setUserChatLoading(false));
    }
  }catch(e){
    console.log(e);
  }
}