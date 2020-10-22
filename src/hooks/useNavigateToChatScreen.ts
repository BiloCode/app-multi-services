import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux";
import { setWorkerChatData } from "../redux/reducers/Chat/actions/sync";
import { ChatMetadata } from "../redux/reducers/Chat/metadata";

const useNavigateToChatScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const NavigateToChat = (userData : ChatMetadata.IUserDataRoom) => {
    dispatch(setWorkerChatData(userData));
    navigate('worker-chat');
  }

  return NavigateToChat;
}

export default useNavigateToChatScreen;