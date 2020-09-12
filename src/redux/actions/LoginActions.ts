const TYPES = {
  SET_USERNAME_VALUE : 'set-username-value',
  SET_PASSWORD_VALUE : 'set-password-value',
  EMPTY_STORE : 'empty-store'
}

export const setPassword = (value : string) => ({
  type : TYPES.SET_PASSWORD_VALUE,
  payload : value
});

export const setUsername = (value : string) => ({
  type : TYPES.SET_USERNAME_VALUE,
  payload : value
});

export const setEmptyStore = () => ({
  type : TYPES.EMPTY_STORE
})

export default TYPES;