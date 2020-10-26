import TYPES, { UserMetadata } from "../metadata";

export const setUserInformation = (user : UserMetadata.IUser) => ({
  type : TYPES.SET_USER_INFORMATION,
  payload : user
});

export const setWorkerInformation = (worker : UserMetadata.IWorker) => ({
  type : TYPES.SET_WORKER_INFORMATION,
  payload : worker
})

export const setUserFullName = (fullname : string) => ({
  type : TYPES.UPDATE_USER_FULLNAME,
  payload : fullname
});

export const setUserDescription = (description : string) => ({
  type : TYPES.UPDATE_USER_DESCRIPTION,
  payload : description
});

export const setWorkerFullName = (fullname : string) => ({
  type : TYPES.UPDATE_WORKER_FULLNAME,
  payload : fullname
});

export const setWorkerDescription = (description : string) => ({
  type : TYPES.UPDATE_WORKER_DESCRIPTION,
  payload : description
});