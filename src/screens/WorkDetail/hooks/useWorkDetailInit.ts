import { WorkDetailState } from '../../../metadata/types'

interface IReturnParams {
  workState : WorkDetailState;
}

const useWorkDetailInit = () : IReturnParams => {
  const workState : WorkDetailState = 'waiting-confirmation';
  
  return {
    workState
  }
}

export default useWorkDetailInit;