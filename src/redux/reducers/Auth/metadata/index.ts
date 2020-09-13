import { AuthenticationState } from '../../../../metadata/types';

export const TYPES = {
  SET_AUTHENTICATION_STATE: "set-authentication-state",
  SET_LOADING_DATA : 'set-loading-data',
};

namespace AuthMetadata {
  export interface IStore {
    isLoadingInformation : boolean;
    userAuthenticatioState : AuthenticationState,
  }
}

export default AuthMetadata;