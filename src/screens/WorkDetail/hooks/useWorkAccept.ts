import { Alert } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { acceptWork } from "../../../redux/reducers/Work/actions/async";
import { WorkMetadata } from "../../../redux/reducers/Work/metadata";

const useWorkAccept = () => {
  const dispatch = useDispatch();

  const { workDetail } = useSelector<ReduxRootState,WorkMetadata.IStore>(({ work }) => work, shallowEqual);

  return () => {
    Alert.alert(
      'Solicitud de Trabajo',
      '¿Desea aceptar este trabajo?',
      [
        {
          text : 'Aceptar',
          onPress : () => {
            dispatch(acceptWork(workDetail.id));
          }
        },
        {
          text : 'No Aceptar',
          onPress : () => console.log('No acepto')
        }
      ]
    )
  }
}

export default useWorkAccept;