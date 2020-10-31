import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { SpecialtyMetadata } from "../../../redux/reducers/Specialty/metadata";
import { WorkerMetadata } from "../../../redux/reducers/Worker/metadata";
import { getWorkersBySpecialty } from '../../../redux/reducers/Worker/actions/async';
import { setSearchReset } from '../../../redux/reducers/Worker/actions/sync';

const useSearchInit = () => {
  const dispatch = useDispatch();
  const { list } = useSelector<ReduxRootState,SpecialtyMetadata.IStore>(({ specialties }) => specialties, shallowEqual);
  const {
    search : {
      filterId,
      searchByName
    }
  } = useSelector<ReduxRootState,WorkerMetadata.IStore>(({ worker }) => worker, shallowEqual);

  useEffect(() => {
    dispatch(getWorkersBySpecialty(filterId));

    return () => {
      dispatch(setSearchReset());
    }
  },[]);

  const currentFilter = list.find(v => v.id === filterId);

  return {
    filterTitle : searchByName ? `Busqueda : ${searchByName}` : `Filtro : ${currentFilter?.name!}`
  }
}

export default useSearchInit;