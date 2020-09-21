const useIsWholeNumber = (value : number) => {
  if(value % 1 === 0) return true;

  return false;
}

export default useIsWholeNumber;