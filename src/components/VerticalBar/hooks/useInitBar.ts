import { useNavigation } from "@react-navigation/native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { closeAuthentication } from "../../../redux/reducers/Auth/actions/async";
import AuthMetadata from "../../../redux/reducers/Auth/metadata";

const useInitBar = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const { userAuthenticationState } = useSelector<ReduxRootState,AuthMetadata.IStore>(({ auth }) => auth, shallowEqual);

  const NavigateToProfile = () => nav.navigate('profile');
  const CloseSession = () => {
    dispatch(closeAuthentication());
  }

  return {
    NavigateToProfile,
    CloseSession,
    userAuthenticationState
  }
}

export default useInitBar;