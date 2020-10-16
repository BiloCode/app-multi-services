import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ReduxRootState } from "../../../metadata/types";
import { UserMetadata } from "../../../redux/reducers/User/metadata";
import { getWorkList } from "../../../redux/reducers/Work/actions/async";

const useWorkerWorkListInit = () => {
  const {
    workerInformation : { id }
  } = useSelector<ReduxRootState, UserMetadata.IStore>(({ user }) => user, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkList({
      type : 'worker',
      value : id!
    }));
  },[]);
}

export default useWorkerWorkListInit;