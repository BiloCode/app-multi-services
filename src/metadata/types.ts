import reducers from "../redux/reducers";

export type AuthenticationState = 'not-authentication' | 'authentication-user' | 'authentication-worker';
export type ReduxRootState = ReturnType<typeof reducers>;