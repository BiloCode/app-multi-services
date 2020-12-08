import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Alert } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { updateProfileImage } from "../../../redux/reducers/User/actions/async";
import { ReduxRootState } from "../../../metadata/types";
import AuthMetadata from "../../../redux/reducers/Auth/metadata";
import { UserMetadata } from "../../../redux/reducers/User/metadata";

const useChangeProfileImage = () => {
  const [ editImageEnabled , setEditImageEnabled ] = useState<boolean>(false);

  const { userInformation , workerInformation } = useSelector<ReduxRootState, UserMetadata.IStore>(({ user }) => user, shallowEqual)
  const { userAuthenticationState } = useSelector<ReduxRootState, AuthMetadata.IStore>(({ auth }) => auth, shallowEqual);

  const dispatch = useDispatch();

  const isWorker = userAuthenticationState === 'authentication-worker';

  const ChangeProfileImage = async () => {
    try {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if(status !== 'granted') {
        Alert.alert('Permiso Rechazado', 'Necesitas brindarle permisos para poder actualizar tu foto.')
        return;
      }

      const request = await ImagePicker.launchImageLibraryAsync({
        mediaTypes : ImagePicker.MediaTypeOptions.Images,
        allowsEditing : true,
        aspect : [4,3],
        quality : 1,
        base64 : true
      });

      if(!request.cancelled) {
        const userId = !isWorker ? userInformation.id : workerInformation.user.id;

        const arrName = request.uri.split('/'),
          name = arrName[arrName.length - 1];

        const image = {
          imageFormat : request.base64!,
          imageName : name
        }
        
        dispatch(updateProfileImage(image, userId, isWorker));
      }
    }catch(e){
      console.log(e);
    }
  }

  return {
    editImageEnabled,
    ChangeProfileImage
  }
}

export default useChangeProfileImage;