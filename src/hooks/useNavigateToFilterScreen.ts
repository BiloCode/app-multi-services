import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setFilterId } from "../redux/reducers/Worker/actions/sync";

const useNavigateToFilterScreen = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const onPress = (filterId : number) : void => {
    dispatch(setFilterId(filterId));
    navigate('search-filter');
  }

  return onPress;
}

export default useNavigateToFilterScreen;