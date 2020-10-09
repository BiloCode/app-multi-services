import { useState } from "react";

const useChangeFullName = (name : string) => {
  const [ fullName , setFullName ] = useState<string>(name);
  const [ inputEnabled , setInputEnabled ] = useState<boolean>(false);

  const ActivateInputFullName = () => setInputEnabled(() => !inputEnabled);
  const ChangeFullName = (text : string) => setFullName(text);

  return {
    fullName,
    ActivateInputFullName,
    ChangeFullName,
    inputEnabled
  }
}

export default useChangeFullName;