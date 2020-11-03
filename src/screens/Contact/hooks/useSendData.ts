import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { Alert } from "react-native";
import { App } from "../../../config";

const useSendData = (specialtyId : number, userId : number) => {
  const { goBack } = useNavigation();

  const [ isSend , setIsSend ] = useState<boolean>(false);
  const [ title , setTitle ] = useState<string>('');
  const [ content , setContent ] = useState<string>('');
  const [ phoneNumber , setPhoneNumber ] = useState<string>('');
  const [ email , setEmail ] = useState<string>('');

  const ChangeTitle = (value : string) => setTitle(() => value);
  const ChangeContent = (value : string) => setContent(() => value);
  const ChangePhoneNumber = (value : string) => setPhoneNumber(() => value);
  const ChangeEmail = (value : string) => setEmail(() => value);

  const SendData = async () => {
    try {
      const formatTitle = title.trim(),
        formatContent = content.trim(),
        formatPhoneNumber = phoneNumber.trim(),
        formatEmail = email.trim();

      if(!formatTitle || !formatContent || !specialtyId || !formatPhoneNumber || !formatEmail){
        Alert.alert(
          'Formulario Incompleto',
          'Existen campos vacios, porfavor rellenelos todos.',
          [{ text : 'Entendido' }]
        );
        return;
      }

      const isPhoneNumber = formatPhoneNumber.length === 9;

      if(!isPhoneNumber) {
        Alert.alert(
          'Numero de Celular Invalido',
          'El numero de celular ingresado no es valido. Porfavor ingreselo nuevamente.'
        )
        return;
      }

      setIsSend(() => true);

      const request = await App.post('/curriculum/add', new URLSearchParams({
        title : formatTitle,
        content : formatContent,
        phone : formatPhoneNumber,
        email : formatEmail,
        specialtyId : String(specialtyId),
        userId : String(userId)
      }));

      const { send , error } = request.data;

      if(error){
        Alert.alert('Error','Ocurrio un error en el servidor');
      }else if(send){
        Alert.alert(
          'Solicitud enviada',
          'La solicitud se ha enviado correctamente.\nEspere a que los administradores se pongan en contacto con usted.',
          [{ text : 'Entendido' }]
        );
        goBack();
      }else{
        Alert.alert('Error del Servidor','No se pudo enviar la solicitud');
      }

      setIsSend(() => false);
    }catch(e){
      console.log(e);
    }
  }

  return {
    ChangeTitle,
    ChangeContent,
    ChangeEmail,
    ChangePhoneNumber,
    SendData,
    isSend
  }
}

export default useSendData;