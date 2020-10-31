import { useNavigation } from "@react-navigation/native";
import { shallowEqual, useSelector } from "react-redux";
import useCloseSession from "../../../hooks/useCloseSession";
import { ReduxRootState } from "../../../metadata/types";
import AuthMetadata from "../../../redux/reducers/Auth/metadata";

const useInitBar = () => {
  const nav = useNavigation();
  const { userAuthenticationState } = useSelector<ReduxRootState,AuthMetadata.IStore>(({ auth }) => auth, shallowEqual);

  const CloseSession = useCloseSession();
  const NavigateToProfile = () => nav.navigate('profile');
  
  return {
    NavigateToProfile,
    CloseSession,
    userAuthenticationState
  }
}

export default useInitBar;