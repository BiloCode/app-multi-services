import { AuthenticationState } from '../../../../metadata/types';

export const TYPES = {
  SET_AUTHENTICATION_STATE: "set-authentication-state",
  SET_LOADING_DATA : 'set-loading-data',
  SET_IS_SEND : 'set-is-send'
};  

namespace AuthMetadata {
  export interface IStore {
    isLoadingInformation : boolean;
    isSend : boolean;
    userAuthenticationState : AuthenticationState;
  }
}

export default AuthMetadata;