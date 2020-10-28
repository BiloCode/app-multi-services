import { TYPES, WorkMetadata } from '../metadata';

export const setWorks = (works : WorkMetadata.IWork[]) => ({
  type : TYPES.GET_WORKS,
  payload : works
});

export const setWorkDetail = (work : WorkMetadata.IWork) => ({
  type : TYPES.SET_WORK_DETAIL,
  payload : work
})

export const setWorkLoading = (value : boolean) => ({
  type : TYPES.SET_WORK_LOADING,
  payload: value
})

export const workResetData = () => ({
  type : TYPES.RESET_DATA
});

export const workUpdateById = (work : WorkMetadata.IWork) => ({
  type : TYPES.WORK_UPDATE_BY_ID,
  payload : work
});