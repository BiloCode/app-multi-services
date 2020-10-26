import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { updateFullName } from "../../../redux/reducers/User/actions/async";

const useChangeFullName = (name : string) => {
  const [ fullName , setFullName ] = useState<string>(name);
  const [ inputEnabled , setInputEnabled ] = useState<boolean>(false);

  const { auth , user } = useSelector<ReduxRootState,ReduxRootState>(state => state, shallowEqual);
  const dispatch = useDispatch();

  const ActivateInputFullName = () => {
    if(inputEnabled){
      const isWorker = auth.userAuthenticatioState === 'authentication-worker';
      const userId = (!isWorker) ? 
            user.userInformation.id : 
            user.workerInformation.user.id;

      dispatch(updateFullName(userId, fullName, isWorker));
    }

    setInputEnabled(() => !inputEnabled);
  }

  const ChangeFullName = (text : string) => setFullName(text);

  return {
    fullName,
    ActivateInputFullName,
    ChangeFullName,
    inputEnabled
  }
}

export default useChangeFullName;