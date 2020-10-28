import { useNavigation } from "@react-navigation/native";

const useActionsTabWorker = () => {
  const nav = useNavigation();

  const NavigateToHome = () => nav.navigate('home');
  const NavigateToWorkList = () => nav.navigate('work-list');
  const NavigateToUserChat = () => nav.navigate('chat-list')
  
  return {
    NavigateToHome,
    NavigateToWorkList,
    NavigateToUserChat
  }
}

export default useActionsTabWorker;