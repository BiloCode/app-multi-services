import { useNavigation } from "@react-navigation/native";

const useActionsBar = () => {
  const nav = useNavigation();

  const NavigateToHome = () => nav.navigate('home');
  const NavigateToContact = () => nav.navigate('contact');
  const NavigateToSearch = () => nav.navigate('search');
  const NavigateToWorkDetail = () => alert('En construccion...');
  
  return {
    NavigateToHome,
    NavigateToContact,
    NavigateToSearch,
    NavigateToWorkDetail
  }
}

export default useActionsBar;