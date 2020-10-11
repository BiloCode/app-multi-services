import reducers from "../redux/reducers";

export type AuthenticationState = 'not-authentication' | 'authentication-user' | 'authentication-worker';
export type WorkDetailState = 'waiting-confirmation' | 'pendient' | 'completed';
export type ReduxRootState = ReturnType<typeof reducers>;