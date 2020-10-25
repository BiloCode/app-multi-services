import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { getMessagesList, joinRoom, leaveRoom } from "../../../redux/reducers/Chat/actions/async";

const useJoinRoom = () => {
  //Redux
  const { user , chat } = useSelector<ReduxRootState, ReduxRootState>(state => state, shallowEqual);
  const { userInformation , workerInformation } = user;
  const { userData , socket , roomId } = chat;

  const dispatch = useDispatch();

  const isSpeaker = () => userData.userType;

  useEffect(() => {
    //Other user is user / worker
    const userId = isSpeaker() === 'user' ? userData.id : userInformation.id!;
    const userWorkerId = isSpeaker() === 'worker' ? userData.id : workerInformation.user?.id!;

    dispatch(getMessagesList(userId, userWorkerId));
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