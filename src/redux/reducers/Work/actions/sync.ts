import { TYPES, WorkMetadata } from '../metadata';

export const setWorks = (works : WorkMetadata.IWork[]) => ({
  type : TYPES.GET_WORKS,
  payload : works
});

export const setWorkDetail = (work : WorkMetadata.IWork) => ({
  type : TYPES.SET_WORK_DETAIL,
  payload : work
})