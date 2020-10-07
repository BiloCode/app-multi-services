import { shallowEqual, useSelector } from "react-redux";
import { ReduxRootState } from "../metadata/types";
import { UserMetadata } from "../redux/reducers/User/metadata";

const useUserSignInData = () => {
  const {
    userInformation 
  } = useSelector<ReduxRootState,UserMetadata.IStore>(({ user }) => user, shallowEqual);

  return userInformation;
}

export default useUserSignInData;