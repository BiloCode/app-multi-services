import { AuthenticationState } from '../../../../metadata/types';

namespace AuthMetadata {
  export interface IStore {
    isLoadingInformation : boolean;
    userAuthenticatioState : AuthenticationState
  }
}

export default AuthMetadata;