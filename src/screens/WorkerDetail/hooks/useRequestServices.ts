import { useState } from "react";
import { useDispatch } from "react-redux";

const useRequestServices = (setClose : Function) => {
  const [ title , setTitle ] = useState<string>('');
  const [ price , setPrice ] = useState<string>('');
  const [ description , setDescription ] = useState<string>('');
  const [ isLoading , setLoading ] = useState<boolean>(false);
  
  const dispatch = useDispatch();

  const ChangePrice = (text : string) => setPrice(text);
  const ChangeDescription = (text : string) => setDescription(text);

  const SendRequest = () => {
    //Dispatch...
    setClose();
  }

  return {
    isLoading,
    SendRequest,
    ChangeDescription,
    ChangePrice
  }
}

export default useRequestServices;