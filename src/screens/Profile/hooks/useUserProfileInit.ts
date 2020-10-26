import { shallowEqual, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { ReduxRootState } from "../../../metadata/types";
import { UserMetadata } from "../../../redux/reducers/User/metadata";

const useUserProfileInit = () => {
  const { goBack } = useNavigation();
  const {
    userInformation : {
      fullName,
      description,
      profileImage,
      createdAt
    }
  } = useSelector<ReduxRootState,UserMetadata.IStore>(({ user }) => user, shallowEqual);

  return {
    fullName,
    profileImage,
    description,
    createdAt,
    BackToScreen : () => goBack()
  }
}

export default useUserProfileInit;