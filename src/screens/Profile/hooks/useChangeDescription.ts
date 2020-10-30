import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { updateDescription } from "../../../redux/reducers/User/actions/async";

const useChangeDescription = (description : string) => {
  const [ descriptionText , setDescription ] = useState<string>(description);
  const [ inputEnabled , setInputEnabled ] = useState<boolean>(false);

  const { auth , user } = useSelector<ReduxRootState,ReduxRootState>(state => state, shallowEqual);
  const dispatch = useDispatch();

  const ActivateInputDescription = () => {
    if(inputEnabled){
      const isWorker = auth.userAuthenticationState === 'authentication-worker';
      const userId = (!isWorker) ? 
            user.userInformation.id : 
            user.workerInformation.user.id;

      dispatch(updateDescription(userId, descriptionText, isWorker));
    }

    setInputEnabled(() => !inputEnabled);
  }
  
  const ChangeDescription = (text : string) => setDescription(text);

  return {
    descriptionText,
    ActivateInputDescription,
    ChangeDescription,
    inputEnabled
  }
}

export default useChangeDescription;