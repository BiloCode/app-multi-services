import { useEffect } from 'react';

//Types
import AuthMetadata from '../../redux/reducers/Auth/metadata';
import { RootState } from '../../metadata/types';

//Redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { checkAuthenticationState } from '../../redux/actions/AuthActions';

const useRouterInit = () : AuthMetadata.IStore => {
  const dispatch = useDispatch();
  const {
    userAuthenticatioState,
    isLoadingInformation
  } = useSelector<RootState, AuthMetadata.IStore>(s => s.auth, shallowEqual);

  useEffect(() => {
    dispatch(checkAuthenticationState());
  },[]);

  return {
    userAuthenticatioState,
    isLoadingInformation
  }
}

export default useRouterInit;