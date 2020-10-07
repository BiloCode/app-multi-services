import TYPES, { UserMetadata } from "../metadata";

export const setUserInformation = (user : UserMetadata.IUser) => ({
  type : TYPES.SET_USER_INFORMATION,
  payload : user
});