import { useEffect } from 'react';

//Types
import AuthMetadata from '../../redux/reducers/Auth/metadata';
import { ReduxRootState } from '../../metadata/types';

//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { checkAuthenticationState } from '../../redux/reducers/Auth/actions/async';
import { SocketStartConnection } from '../../redux/reducers/Chat/actions/sync';

const useRouterInit = () => {
  const dispatch = useDispatch();
  const {
    userAuthenticatioState,
    isLoadingInformation
  } = useSelector<ReduxRootState, AuthMetadata.IStore>(s => s.auth, shallowEqual);

  useEffect(() => {
    dispatch(checkAuthenticationState());
    dispatch(SocketStartConnection());
  },[]);

  return {
    userAuthenticatioState,
    isLoadingInformation
  }
}

export default useRouterInit;