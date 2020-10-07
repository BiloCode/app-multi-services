import { useDispatch } from "react-redux";

const useSearchWorkerByName = () => {
  const dispatch = useDispatch();

  const SearchByName = (text : string) => {
    //dispatch...
  }

  return SearchByName;
}

export default useSearchWorkerByName;