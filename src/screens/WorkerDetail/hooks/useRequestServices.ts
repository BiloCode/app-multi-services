import { useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import useUserSignInData from "../../../hooks/useUserSignInData";
import { ReduxRootState } from "../../../metadata/types";
import { WorkerMetadata } from "../../../redux/reducers/Worker/metadata";
import { requestService } from '../../../redux/reducers/Worker/actions/async'

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

  //Redux
  const dispatch = useDispatch();

  const SendRequest = useCallback(async () => {
    if(!title || !price || !description) return;
    else if(price < basePrice){
      alert('El precio no puede ser menor al precio base del especialista');
      return;
    }

    setLoading(() => true);

    const payload = {
      userId : id,
      workerId : detailData.worker.id,
      title,
      price : price,
      description
    }

    const isSend = await dispatch(requestService(payload));
    if(isSend!) {
      alert('Acaba de solicitar el servicio. Espere a que el especialista acepte o rechaze la peticion.')
      closeModal();
    }else{
      alert('No se pudo solicitar debido a un error.');
    }

    setLoading(() => false);
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