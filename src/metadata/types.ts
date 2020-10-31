import reducers from "../redux/reducers";

export type AuthenticationState = 'not-authentication' | 'authentication-user' | 'authentication-worker';
export type WorkDetailState = 'waiting-confirmation' | 'pendient' | 'completed' | 'reject';
export type WorkerState = 'available' | 'not-available';

export type ReduxRootState = ReturnType<typeof reducers>;