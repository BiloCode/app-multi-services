import { useState } from "react"

const useHideModal = () => {
  const [ isHide , setIsHide ] = useState<boolean>(true);
  
  const setOpen = () => setIsHide(() => false);
  const setClose = () => setIsHide(() => true);

  return {
    isHide,
    setOpen,
    setClose
  }
}

export default useHideModal;