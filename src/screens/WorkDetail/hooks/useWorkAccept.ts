import { Alert } from "react-native";
import { useDispatch } from "react-redux";

const useWorkAccept = () => {
  const dispatch = useDispatch();
  
  return () => {
    Alert.alert(
      'Solicitud de Trabajo',
      '¿Desea aceptar este trabajo?',
      [
        {
          text : 'Aceptar',
          onPress : () => console.log('Dispatch')
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