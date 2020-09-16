import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { closeAuthentication } from "../../../redux/reducers/Auth/actions/async";

const useActionsBar = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();

  const NavigateToHome = () => nav.navigate('home');
  const NavigateToConfiguration = () => null;
  const NavigateToProfile = () => null;
  const NavigateToSearch = () => null;
  const NavigateToWorkDetail = () => null;
  const CloseSession = () => {
    dispatch(closeAuthentication());
  }

  return {
    NavigateToHome,
    NavigateToConfiguration,
    NavigateToProfile,
    NavigateToSearch,
    NavigateToWorkDetail,
    CloseSession
  }
}

export default useActionsBar;