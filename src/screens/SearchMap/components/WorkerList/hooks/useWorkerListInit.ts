import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import useUserSignInData from '../../../../../hooks/useUserSignInData';
import { ReduxRootState } from '../../../../../metadata/types';
import { getNearestWorkersUnlimited } from '../../../../../redux/reducers/Worker/actions/async';
import { WorkerMetadata } from '../../../../../redux/reducers/Worker/metadata';

const useWorkerListInit = () => {
  const dispatch = useDispatch();

  const { district } = useUserSignInData();
  const {
    mapSearch : {
      isLoadingWorkers,
      workers
    }
  } = useSelector<ReduxRootState,WorkerMetadata.IStore>(({ worker }) => worker, shallowEqual);

  useEffect(() => {
    dispatch(getNearestWorkersUnlimited(district.province.id));
  },[]);

  return {
    workers,
    isLoadingWorkers
  }
}

export default useWorkerListInit;