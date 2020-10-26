import { useState } from "react";

const useChangeDescription = (description : string) => {
  const [ descriptionText , setDescription ] = useState<string>(description);
  const [ inputEnabled , setInputEnabled ] = useState<boolean>(false);

  const ActivateInputDescription = () => setInputEnabled(() => !inputEnabled);
  const ChangeDescription = (text : string) => setDescription(text);

  return {
    descriptionText,
    ActivateInputDescription,
    ChangeDescription,
    inputEnabled
  }
}

export default useChangeDescription;