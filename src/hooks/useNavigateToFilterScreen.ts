import { useNavigation } from "@react-navigation/native";

const useNavigateToFilterScreen = () => {
  const { navigate } = useNavigation();

  const onPress = (filterId : number) : void => {
    navigate('search-filter',{ filter : filterId });
  }

  return onPress;
}

export default useNavigateToFilterScreen;