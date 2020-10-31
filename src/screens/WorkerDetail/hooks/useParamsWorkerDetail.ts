import { useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import useNavigateToChatScreen from "../../../hooks/useNavigateToChatScreen"
import useUserSignInData from "../../../hooks/useUserSignInData"
import { ReduxRootState } from "../../../metadata/types"
import { isUserPendientWork } from "../../../redux/reducers/Worker/actions/async"
import { WorkerMetadata } from "../../../redux/reducers/Worker/metadata"

const useParamsWorkerDetail = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigateToChatScreen();
  const userSign = useUserSignInData();

  const { 
    detailData : {
      worker : {
        id,
        availability,
        basePrice,
        specialty,
        user
      },
      workState,
      isWorkStateLoading
    }
  } = useSelector<ReduxRootState,WorkerMetadata.IStore>(({ worker }) => worker, shallowEqual);

  const NavigateToChat = () => {
    Navigate({
      id : user.id,
      specialty : specialty.name,
      basePrice : basePrice,
      fullName : user.fullName,
      profileImage : user.profileImage
    });
  }

  useEffect(() => {
    const workerId = id;
    const userId = userSign.id;

    dispatch(isUserPendientWork(userId, workerId));
  },[]);
  
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
    puntuaction : 3,
    NavigateToChat,
    isWorkStateLoading,
    workState,
    MessageButton : () => {
      if(workState.state === 'pendient') return 'Concluir Trabajo';
      else if(workState.state === 'waiting-confirmation') return 'Esperando Confirmacion.';
  
      return 'Solicitar Servicio';
    }
  }
}

export default useParamsWorkerDetail;