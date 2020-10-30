import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { getMessagesList, joinRoom, leaveRoom } from "../../../redux/reducers/Chat/actions/async";

const useJoinRoom = () => {
  //Redux
  const { user , chat , auth } = useSelector<ReduxRootState, ReduxRootState>(state => state, shallowEqual);
  const { userAuthenticationState } = auth;
  const { userInformation , workerInformation } = user;
  const { userData , socket , roomId } = chat;

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

    if(userWorkerId > 0 && userId > 0){
      dispatch(getMessagesList(userWorkerId, userId));
    }
  },[]);

  useEffect(() => {
    if(socket && roomId) {
      dispatch(joinRoom(socket, roomId));

      return () => {
        //Abandonar la sala al salir de esta pantalla
        dispatch(leaveRoom(socket, roomId));
      }
    }
  },[socket, roomId]);
}

export default useJoinRoom;