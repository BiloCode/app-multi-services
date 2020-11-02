import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { getMessagesList } from "../../../redux/reducers/Chat/actions/async";
import { chatResetData, setJoinRoom } from "../../../redux/reducers/Chat/actions/sync";

const useJoinRoom = () => {
  //Redux
  const { user , chat , auth } = useSelector<ReduxRootState, ReduxRootState>(state => state, shallowEqual);
  const { userAuthenticationState } = auth;
  const { userInformation , workerInformation } = user;
  const { userData , socket, roomId } = chat;

  const dispatch = useDispatch();

  useEffect(() => {
    let userWorkerId : number = 0, userId : number = 0;

    if(userAuthenticationState === 'authentication-worker'){
      userWorkerId = workerInformation.user.id;
      userId = userData.id;
    }else if(userAuthenticationState === 'authentication-user') {
      userWorkerId = userData.id;
      userId = userInformation.id;
    }

    dispatch(getMessagesList(userWorkerId, userId)); 
  },[]);

  useEffect(() => {
    if(roomId){
      socket?.emit('join-room', { roomId });
      socket?.on('joined-room-success', () => {
        dispatch(setJoinRoom());
      });

      return () => {
        socket?.emit('leave-room', { roomId });
        dispatch(chatResetData());
      }
    }
  },[roomId]);

}

export default useJoinRoom;