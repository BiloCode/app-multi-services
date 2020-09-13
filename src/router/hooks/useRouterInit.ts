import { useEffect } from 'react';

//Types
import AuthMetadata from '../../redux/reducers/Auth/metadata';
import { ReduxRootState } from '../../metadata/types';

//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { checkAuthenticationState } from '../../redux/reducers/Auth/actions/async';

const useRouterInit = () => {
  const dispatch = useDispatch();
  const {
    userAuthenticatioState,
    isLoadingInformation
  } = useSelector<ReduxRootState, AuthMetadata.IStore>(s => s.auth, shallowEqual);

  useEffect(() => {
    dispatch(checkAuthenticationState());
  },[]);

  return {
    userAuthenticatioState,
    isLoadingInformation
  }
}

export default useRouterInit;