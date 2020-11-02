import { useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import useUserSignInData from "../../../hooks/useUserSignInData";
import { ReduxRootState } from "../../../metadata/types";
import { WorkerMetadata } from "../../../redux/reducers/Worker/metadata";
import { requestService } from '../../../redux/reducers/Worker/actions/async'
import { Alert } from "react-native";

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
    try {
      const formatTitle = title.trim(),
        formatDescription = description.trim();

      if(!formatTitle || !price || !formatDescription){
        Alert.alert('Formulario Vacio','Rellene todos los campos porfavor.');
        return;
      }else if(price < basePrice){
        Alert.alert('Precio Invalido','El precio no puede ser menor al precio base del especialista');
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
        Alert.alert(
          'Solicitud Enviada',
          'Acaba de solicitar el servicio.\nEspere a que el especialista acepte o rechaze la peticion.',
          [{ text : 'Entendido' }]
        )
        closeModal();
      }else{
        Alert.alert('Error','No se pudo solicitar debido a un error.');
      }

      setLoading(() => false);
    }catch(e){
      console.log(e);
      Alert.alert('Error','No se pudo solicitar debido a un error.');
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