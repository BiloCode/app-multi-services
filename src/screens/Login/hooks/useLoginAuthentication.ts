import { useState } from "react";
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
    if(!usernameValue && !passwordValue) return;

    dispatch(sendLoginInformation(usernameValue,passwordValue));
  }

  return {
    changePasswordValue,
    changeUsernameValue,
    sendData,
    isSend
  }
}

export default useLoginAuthentication;