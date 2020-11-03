import { useState } from "react"

const useDropDown = () => {
  const [ dropDownActive , setDropDownActive ] = useState<number>(-1);

  const ToggleHideContent = (id : number) => () => {
    if(id === dropDownActive) {
      setDropDownActive(() => -1);
      return;
    }

    setDropDownActive(() => id);
  }

  return {
    dropDownActive,
    ToggleHideContent
  }
}

export default useDropDown;