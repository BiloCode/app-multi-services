import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { App } from "../../../config";

const useSendData = (specialtyId : number, userId : number) => {
  const { goBack } = useNavigation();

  const [ isSend , setIsSend ] = useState<boolean>(false);
  const [ title , setTitle ] = useState<string>('');
  const [ content , setContent ] = useState<string>('');

  const ChangeTitle = (value : string) => setTitle(() => value);
  const ChangeContent = (value : string) => setContent(() => value);

  const SendData = async () => {
    try {
      if(!title || !content || !specialtyId){
        alert('Rellene los campos vacios porfavor.');
        return;
      }

      const request = await App.post('/curriculum/add', new URLSearchParams({
        title,
        content,
        specialtyId : String(specialtyId),
        userId : String(userId)
      }));

      const { send , error } = request.data;

      if(error){
        alert('Ocurrio un error en el servidor');
      }else if(send){
        alert('Se ha enviado la solicitud');
        goBack();
      }else{
        alert('No se pudo enviar la solicitud');
      }
    }catch(e){
      console.log(e);
    }
  }

  return {
    ChangeTitle,
    ChangeContent,
    SendData,
    isSend
  }
}

export default useSendData;