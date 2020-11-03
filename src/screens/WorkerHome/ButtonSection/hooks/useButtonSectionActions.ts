import { useNavigation } from "@react-navigation/native"

const useButtonSectionAction = () => {
  const { navigate } = useNavigation();
  
  return {
    NavigateToWorkList : () => {
      navigate('work-list');
    },
    NavigateToChatList : () => {
      navigate('chat-list')
    }
  }
}

export default useButtonSectionAction;