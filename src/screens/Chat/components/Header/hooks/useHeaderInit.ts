import { useNavigation } from "@react-navigation/native";
import { shallowEqual, useSelector } from "react-redux";
import useIsWholeNumber from "../../../../../hooks/useIsWholeNumber";
import { ReduxRootState } from "../../../../../metadata/types";
import AuthMetadata from "../../../../../redux/reducers/Auth/metadata";
import { ChatMetadata } from "../../../../../redux/reducers/Chat/metadata";

const useHeaderInit = () => {
  const { goBack } = useNavigation();
  
  //Redux
  const { userAuthenticationState } = useSelector<ReduxRootState, AuthMetadata.IStore>(({ auth }) => auth, shallowEqual);
  const { userData } = useSelector<ReduxRootState, ChatMetadata.IStore>(({ chat }) => chat, shallowEqual);

  if(userAuthenticationState === 'authentication-user'){
    const isWholeNumber = useIsWholeNumber(userData.basePrice!);

    return {
      fullName : userData.fullName,
      profileImage : userData.profileImage,
      specialty : userData.specialty,
      basePrice : isWholeNumber ? userData.basePrice + '.00' : userData.basePrice,
      userAuthenticationState,
      GoToBackScreen : () => goBack()
    }
  }

  return {
    fullName : userData.fullName,
    profileImage : userData.profileImage,
    userAuthenticationState,
    GoToBackScreen : () => goBack()
  }
}

export default useHeaderInit;