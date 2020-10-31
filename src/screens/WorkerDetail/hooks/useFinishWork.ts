import { Alert } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ReduxRootState } from "../../../metadata/types";
import { UserMetadata } from "../../../redux/reducers/User/metadata";
import { serviceCompletation } from "../../../redux/reducers/Worker/actions/async";
import { WorkerMetadata } from "../../../redux/reducers/Worker/metadata";

const useFinishWork = () => {
  //const { userInformation } = useSelector<ReduxRootState, UserMetadata.IStore>(({ user }) => user, shallowEqual)
  const {
    detailData : {
      workState
    }
  } = useSelector<ReduxRootState, WorkerMetadata.IStore>(({ worker }) => worker, shallowEqual); 
  const dispatch = useDispatch();
  
  return () => {
    Alert.alert(
      'Finalizar Servicio',
      'Esta apunto de concluir el servicio ofrecido por el especialista, damos por hecho que ya completo su funcion.\n\n¿Esta seguro de realizar esta operacion?\n', 
      [
        {
          text : 'Proceder',
          onPress : async () => {
            const workId = workState.id;
            const isCompleted = await dispatch(serviceCompletation(workId));
            if(isCompleted!) {
              Alert.alert('Servicio Finalizado','El servicio se acaba de concluir con satisfacción.')
            }
          }
        },
        {
          text : 'Cancelar'
        }
      ]
    )    
  }
}

export default useFinishWork;