import { useState } from "react"

const useDropDown = () => {
  const [ isOpen , setIsOpen ] = useState<boolean>(false);

  const ToggleHideContent = () => setIsOpen(() => !isOpen);

  return {
    isOpen,
    ToggleHideContent
  }
}

export default useDropDown;