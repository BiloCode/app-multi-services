import TYPES, { SpecialtyMetadata } from "../metadata";

export const setSpecialtyInformation = (specialties : SpecialtyMetadata.ISpecialty[]) => ({
  type : TYPES.SET_SPECIALTIES,
  payload : specialties
});