import faker from 'faker';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import useUserSignInData from '../../../../../hooks/useUserSignInData';
import { ReduxRootState } from '../../../../../metadata/types';
import { WorkerMetadata } from '../../../../../redux/reducers/Worker/metadata';

const workers : WorkerMetadata.IWorker[] = new Array<WorkerMetadata.IWorker>(3).fill({
  id : 1,
  availability : 'available',
  backgroundImage : '',
  basePrice : 16,
  createdAt : new Date(),
  location : '',
  puntuaction : 4,
  specialty : {
    name : 'Desarrollo de Sistemas'
  },
  user : {
    name : 'Billy',
    lastname : 'Paredes Aycho',
    description : faker.lorem.words(30),
    district : {
      name : 'Lima',
      province : {
        name : 'Rimac'
      }
    },
    profileImage : 'https://hipertextual.com/files/2020/05/hipertextual-nuevo-pokemon-go-es-hacer-que-tus-pokemon-se-vean-mas-reales-2020697065.jpg'
  }
});

const useWorkerListInit = () => {
  const dispatch = useDispatch();

  const { district } = useUserSignInData();
  const {
    mapSearch : {
      isLoadingWorkers,
      //workers
    }
  } = useSelector<ReduxRootState,WorkerMetadata.IStore>(({ worker }) => worker, shallowEqual);

  useEffect(() => {

  },[]);

  return {
    workers,
    isLoadingWorkers
  }
}

export default useWorkerListInit;