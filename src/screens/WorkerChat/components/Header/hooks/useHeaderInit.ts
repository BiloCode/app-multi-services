import { useNavigation } from "@react-navigation/native";
import useIsWholeNumber from "../../../../../hooks/useIsWholeNumber";

const useHeaderInit = () => {
  const { goBack } = useNavigation();
  
  //Redux...
  const basePrice = 16;
  const isWholeNumber = useIsWholeNumber(basePrice);

  return {
    fullName : 'Billy Paredes Aycho',
    profileImage : '',
    specialty : 'Desarrolo de Software',
    basePrice : isWholeNumber ? basePrice + '.00' : basePrice,
    GoToBackScreen : () => goBack()
  }
}

export default useHeaderInit;