import { useDispatch } from "react-redux";
import { getWorkersByName } from "../../../redux/reducers/Worker/actions/async";

const useSearchWorkerByName = () => {
  const dispatch = useDispatch();

  const SearchByName = (text : string) => {
    dispatch(getWorkersByName(text));
  }

  return SearchByName;
}

export default useSearchWorkerByName;