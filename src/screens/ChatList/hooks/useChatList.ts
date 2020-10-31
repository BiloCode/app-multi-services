import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import AuthMetadata from "../../../redux/reducers/Auth/metadata";
import { getChatList } from "../../../redux/reducers/Chat/actions/async";
import { resetChatList } from "../../../redux/reducers/Chat/actions/sync";
import { UserMetadata } from "../../../redux/reducers/User/metadata";

const useChatList = () => {
  //Redux
  const { userAuthenticationState } = useSelector<ReduxRootState,AuthMetadata.IStore>(({ auth }) => auth, shallowEqual);
  const { userInformation , workerInformation } = useSelector<ReduxRootState, UserMetadata.IStore>(({ user }) => user, shallowEqual);

  const dispatch = useDispatch();

  const isWorker = userAuthenticationState === 'authentication-worker';
  const userId = !isWorker ? userInformation.id : workerInformation.user.id;

  useEffect(() => {
    dispatch(getChatList(isWorker, userId));

    return () => {
      dispatch(resetChatList());
    }
  },[]);

  return {
    fullName : isWorker ? workerInformation.user.fullName : userInformation.fullName,
    profileImage : isWorker ? workerInformation.user.profileImage : userInformation.profileImage
  }
}

export default useChatList;