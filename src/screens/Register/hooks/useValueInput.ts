import { useState } from "react"

const useValueInput = () => {
  const [ username , setUsername ] = useState<string>('');
  const [ password , setPassword ] = useState<string>('');
  
  const ChangeUsername = (value : string) => setUsername(() => value);
  const ChangePassword = (value : string) => setPassword(() => value);

  return {
    ChangePassword,
    ChangeUsername,
    username,
    password
  }
}

export default useValueInput;