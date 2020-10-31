import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import useFormatCreateDate from './useFormatCreateDate';
import useUserSignInData from '../../../hooks/useUserSignInData';

const useUserProfileInit = () => {
  const { goBack } = useNavigation();
  const { 
    fullName,
    description,
    profileImage,
    createdAt,
    district
  } = useUserSignInData();

  const formatDate = useFormatCreateDate();

  return {
    fullName,
    profileImage,
    description,
    location : district.province.name + '/' + district.name,
    createdAt : formatDate(createdAt),
    BackToScreen : () => goBack()
  }
}

export default useUserProfileInit;