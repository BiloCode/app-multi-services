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
      location,
      specialty,
      user
    } 
  } = useSelector<ReduxRootState,WorkerMetadata.IStore>(({ worker }) => worker, shallowEqual);

  const NavigateToChat = () => {
    Navigate({
      id : user?.id!,
      specialty : specialty?.name!,
      basePrice : basePrice!,
      fullName : user?.fullName!,
      profileImage : user?.profileImage!,
      userType : 'worker'
    });
  }
  
  return {
    fullName : user?.fullName,
    basePrice,
    profileImage : user?.profileImage,
    description : user?.description,
    location : {
      coords : user?.district.province.location,
      district : user?.district.name,
      province : user?.district.province.name
    },
    specialty : specialty?.name,
    availability,
    NavigateToChat
  }
}

export default useParamsWorkerDetail;