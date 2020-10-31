import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWorkersByName } from "../../../redux/reducers/Worker/actions/async";

const useSearchWorkerByName = () => {
  const [ searchValue , setSearchValue ] = useState<string>('');
  const dispatch = useDispatch();

  const ChangeSearchValue = (text : string) => setSearchValue(text);
  const SearchStart = () => dispatch(getWorkersByName(searchValue));

  return {
    ChangeSearchValue,
    SearchStart
  }
}

export default useSearchWorkerByName;