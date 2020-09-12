import { useDispatch } from "react-redux";
import { closeAuthentication } from "../../../redux/actions/AuthActions";

const useActionsBar = () => {
  const dispatch = useDispatch();

  const NavigateToHome = () => null;
  const NavigateToConfiguration = () => null;
  const NavigateToProfile = () => null;
  const NavigateToSearch = () => null;
  const NavigateToWorkDetail = () => null;
  const CloseSession = () => dispatch(closeAuthentication());

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