import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { App } from "../../../config";

interface IData {
  username : string;
  password : string;
  name : string;
  lastname : string;
  districtId : number;
}

const useRegister = (data : IData) => {
  const [ isSend , setIsSend ] = useState<boolean>(false);
  const { goBack } = useNavigation();

  const onRegister = async () => {
    for(let key in data){
      if(!data[key]){
        alert('Rellene todos los campos.')
        return;
      }
    }

    setIsSend(() => true);

    try {
      const request = await App.post('/user/add', new URLSearchParams({
        ...data,
        districtId : String(data.districtId)
      }));

      const { isRegister , error } = request.data;

      if(error){
        alert(error);
        setIsSend(() => false);
      }else if(isRegister){
        alert('Te acabas de registrar.Ya puedes Iniciar Sesion');
        goBack();
      }else{
        alert('Ocurrio un error inesperado');
        setIsSend(() => false);
      }
    }catch(e){
      console.log(e);
    }
  }

  return {
    onRegister,
    isSend
  }
}

export default useRegister;