import TYPES, { UserMetadata } from "../metadata";

export const setUserInformation = (user : UserMetadata.IUser) => ({
  type : TYPES.SET_USER_INFORMATION,
  payload : user
});

export const setWorkerInformation = (worker : UserMetadata.IWorker) => ({
  type : TYPES.SET_WORKER_INFORMATION,
  payload : worker
})