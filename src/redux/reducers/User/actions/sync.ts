import TYPES from "../metadata";

export const setUserInformation = (user) => ({
  type : TYPES.SET_USER_INFORMATION,
  payload : user
});