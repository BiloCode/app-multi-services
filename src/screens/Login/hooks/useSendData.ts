import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { sendLoginInformation } from "../../../redux/actions/LoginActions";
import LoginMetadata from "../../../redux/reducers/Login/metadata";

const useSendData = () => {
  const dispatch = useDispatch();
  const {  
    usernameValue,
    passwordValue
  } = useSelector<ReduxRootState,LoginMetadata.IStore>(({ login }) => login, shallowEqual);

  const sendData = () => {
    if(!usernameValue && !passwordValue) return;

    dispatch(sendLoginInformation(usernameValue,passwordValue));
  }

  return sendData;
}

export default useSendData;