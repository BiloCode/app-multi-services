import { Alert } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { rejectWork } from "../../../redux/reducers/Work/actions/async";
import { WorkMetadata } from "../../../redux/reducers/Work/metadata";

const useWorkReject = () => {
  const dispatch = useDispatch();

  const { workDetail } = useSelector<ReduxRootState,WorkMetadata.IStore>(({ work }) => work, shallowEqual);

  return () => {
    Alert.alert(
      'Rechazar la Solicitud',
      '¿Desea rechazar este trabajo?',
      [
        {
          text : 'Aceptar',
          onPress : async () => {
            const response = await dispatch(rejectWork(workDetail.id));
            if(response!) {
              Alert.alert('Completado','Se acaba de rechazar el trabajo correctamente.');
            }
          }
        },
        { text : 'Cancelar' }
      ]
    )
  }
}

export default useWorkReject;