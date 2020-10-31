import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { closeAuthentication } from "../redux/reducers/Auth/actions/async";

const useCloseSession = () => {
  const dispatch = useDispatch();

  return () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Esta seguro de querer cerrar su sesión?",
      [
        {
          text: "Si",
          onPress: () => dispatch(closeAuthentication()),
        },
        { text: "No", onPress: () => false }
      ]
    );
  }
}

export default useCloseSession;