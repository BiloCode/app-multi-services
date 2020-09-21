import { TYPES } from "../metadata";

export const setDeparments = (departments) => ({
  type : TYPES.SET_DEPARTMENTS,
  payload : departments
})

export const setFilterProvince = (provinces) => ({
  type : TYPES.SET_FILTER_PROVINCE,
  payload : provinces
})

export const setFilterDistrict = (district) => ({
  type : TYPES.SET_FILTER_DISTRICT,
  payload : district
})