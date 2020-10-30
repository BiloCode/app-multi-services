import { useCallback, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { App } from "../../../config";
import useUserSignInData from "../../../hooks/useUserSignInData";
import { ReduxRootState } from "../../../metadata/types";
import { WorkerMetadata } from "../../../redux/reducers/Worker/metadata";

const useRequestServices = (closeModal : Function, basePrice : number) => {
  const [ title , setTitle ] = useState<string>('');
  const [ price , setPrice ] = useState<number>(basePrice);
  const [ description , setDescription ] = useState<string>('');
  const [ isLoading , setLoading ] = useState<boolean>(false);

  const ChangeTitle = (text : string) => setTitle(() => text);
  const ChangePrice = (text : string) => setPrice(() => parseInt(text));
  const ChangeDescription = (text : string) => setDescription(() => text);

  //User
  const { id } = useUserSignInData();
  const { detailData } = useSelector<ReduxRootState,WorkerMetadata.IStore>(({ worker }) => worker, shallowEqual);

  const SendRequest = useCallback(async () => {
    if(!title || !price || !description) return;
    else if(price < basePrice){
      alert('El precio no puede ser menor al precio base del especialista');
      return;
    }

    setLoading(() => true);

    try {
      const payload = {
        userId : String(id),
        workerId : String(detailData.id),
        title,
        price : String(price),
        description
      }

      const request = await App.post('/worker/request/service', new URLSearchParams(payload));
      const { isWorkCreate , error } = request.data;

      if(error) console.log(error);
      else if(isWorkCreate){
        alert('Acaba de solicitar el servicio. Espere a que el especialista acepte o rechaze la peticion.')
        closeModal();
      }else{
        alert('No se pudo solicitar debido a un error.')
      }

      setLoading(() => false);
    }catch(e){
      console.log(e);
    }
  },[title,price,description]);

  return {
    isLoading,
    SendRequest,
    ChangeDescription,
    ChangePrice,
    ChangeTitle
  }
}

export default useRequestServices;