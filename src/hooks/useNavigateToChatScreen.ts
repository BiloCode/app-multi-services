import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux";
import { ChatMetadata } from "../redux/reducers/Chat/metadata";

const useNavigateToChatScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const NavigateToChat = (workerData : ChatMetadata.IWorkerDataChat) => {
    //dispatch...
    navigate('worker-chat');
  }

  return NavigateToChat;
}

export default useNavigateToChatScreen;