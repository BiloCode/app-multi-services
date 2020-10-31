import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWorkersByName } from "../../../redux/reducers/Worker/actions/async";
import { setSearchFilterByName , setWorkersWithFilter } from "../../../redux/reducers/Worker/actions/sync";

const useSearchWorkerByName = () => {
  const [ searchValue , setSearchValue ] = useState<string>('');
  const dispatch = useDispatch();

  const ChangeSearchValue = (text : string) => setSearchValue(text);
  const SearchStart = () => {
    if(!searchValue){
      dispatch(setSearchFilterByName('Desconocido'));
      dispatch(setWorkersWithFilter([]));
      return;
    }

    dispatch(getWorkersByName(searchValue));
  }

  return {
    ChangeSearchValue,
    SearchStart
  }
}

export default useSearchWorkerByName;