import { setMessages } from './sync';

export const getMessagesList = () => async dispatch => {
  try {
    const messages = [];
    dispatch(setMessages(messages));
  }catch(e){
    console.log(e);
  }
};