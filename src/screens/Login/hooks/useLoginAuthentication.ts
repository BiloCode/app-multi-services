import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendLoginInformation } from "../../../redux/reducers/Auth/actions/async";


const useLoginAuthentication = () => {
  const dispatch = useDispatch();
  const [ usernameValue , setUsernameValue ] = useState<string>('');
  const [ passwordValue , setPasswordValue ] = useState<string>('');

  const changeUsernameValue = (ev : string) => setUsernameValue(ev);
  const changePasswordValue = (ev : string) => setPasswordValue(ev);

  const sendData = () => {
    if(!usernameValue && !passwordValue) return;

    dispatch(sendLoginInformation(usernameValue,passwordValue));
  }

  return {
    changePasswordValue,
    changeUsernameValue,
    sendData
  }
}

export default useLoginAuthentication;