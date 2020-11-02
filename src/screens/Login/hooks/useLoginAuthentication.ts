import { useState } from "react";
import { Alert } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { sendLoginInformation } from "../../../redux/reducers/Auth/actions/async";
import AuthMetadata from "../../../redux/reducers/Auth/metadata";

const useLoginAuthentication = () => {
  const dispatch = useDispatch();
  const { isSend } = useSelector<ReduxRootState,AuthMetadata.IStore>(({ auth }) => auth,shallowEqual)

  const [ usernameValue , setUsernameValue ] = useState<string>('');
  const [ passwordValue , setPasswordValue ] = useState<string>('');

  const changeUsernameValue = (ev : string) => setUsernameValue(ev);
  const changePasswordValue = (ev : string) => setPasswordValue(ev);

  const sendData = () => {
    const formatUsername = usernameValue.trim(),
      formatPassword = passwordValue.trim();
      
    if(!formatUsername && !formatPassword){
      Alert.alert('Formulario Vacio','Rellene todos los campos porfavor.')
      return;
    }

    dispatch(sendLoginInformation(formatUsername,formatPassword));
  }

  return {
    changePasswordValue,
    changeUsernameValue,
    sendData,
    isSend
  }
}

export default useLoginAuthentication;