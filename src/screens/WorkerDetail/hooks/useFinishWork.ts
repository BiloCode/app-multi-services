import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ReduxRootState } from "../../../metadata/types";
import { UserMetadata } from "../../../redux/reducers/User/metadata";

const useFinishWork = (numberOfStars : number) => {
  const { userInformation } = useSelector<ReduxRootState, UserMetadata.IStore>(({ user }) => user, shallowEqual)
  const dispatch = useDispatch();
  
  return () => {
    const userId = userInformation.id;
    //dispatch();
  }
}

export default useFinishWork;