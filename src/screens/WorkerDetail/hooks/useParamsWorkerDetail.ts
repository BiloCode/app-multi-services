import { shallowEqual, useSelector } from "react-redux"
import useNavigateToChatScreen from "../../../hooks/useNavigateToChatScreen"
import { ReduxRootState } from "../../../metadata/types"
import { WorkerMetadata } from "../../../redux/reducers/Worker/metadata"

const useParamsWorkerDetail = () => {
  const Navigate = useNavigateToChatScreen();
  const { 
    detailData : {
      availability,
      basePrice,
      id,
      location,
      specialty,
      user,
      backgroundImage
    } 
  } = useSelector<ReduxRootState,WorkerMetadata.IStore>(({ worker }) => worker,shallowEqual);

  const NavigateToChat = () => {
    Navigate({
      id : id!,
      specialty : specialty?.name!,
      basePrice : basePrice!,
      name : user?.name!,
      lastname : user?.lastname!,
      profileImage : user?.profileImage!
    });
  }
  
  return {
    id,
    fullName : `${user?.name} ${user?.lastname}`,
    basePrice,
    profileImage : user?.profileImage,
    location : {
      coords : location,
      mapLocation : `${user?.district.province.name} ,${user?.district.name}`
    },
    specialty : specialty?.name,
    availability,
    backgroundImage,
    NavigateToChat
  }
}

export default useParamsWorkerDetail;