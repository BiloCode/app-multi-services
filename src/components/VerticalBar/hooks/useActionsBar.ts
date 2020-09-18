import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { closeAuthentication } from "../../../redux/reducers/Auth/actions/async";

const useActionsBar = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();

  const NavigateToHome = () => nav.navigate('home');
  const NavigateToContact = () => nav.navigate('contact');
  const NavigateToProfile = () => null;
  const NavigateToSearch = () => nav.navigate('search');
  const NavigateToWorkDetail = () => alert('En construccion...');
  const CloseSession = () => {
    dispatch(closeAuthentication());
  }

  return {
    NavigateToHome,
    NavigateToContact,
    NavigateToProfile,
    NavigateToSearch,
    NavigateToWorkDetail,
    CloseSession
  }
}

export default useActionsBar;