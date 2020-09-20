import { shallowEqual, useSelector } from "react-redux"
import { ReduxRootState } from "../../../metadata/types"
import { WorkerMetadata } from "../../../redux/reducers/Worker/metadata"

const useParamsWorkerDetail = () => {
  const { 
    detailData : {
      availability,
      basePrice,
      id,
      location,
      specialty,
      user
    } 
  } = useSelector<ReduxRootState,WorkerMetadata.IStore>(({ worker }) => ,shallowEqual);
  
  return {
    id,
    fullName : `${user?.name} ${user?.lastname}`,
    basePrice,
    profileImage : user?.profileImage,
    location,
    specialty : specialty?.name,
    availability
  }
}

export default useParamsWorkerDetail;