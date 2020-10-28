import { shallowEqual, useSelector } from 'react-redux';
import { ReduxRootState } from '../../../metadata/types'
import { WorkMetadata } from '../../../redux/reducers/Work/metadata';

const useWorkDetailInit = () => {
  const {
    workDetail : {
      price,
      title,
      description,
      state,
      user,
      createdAt,
      finished
    }
  } = useSelector<ReduxRootState,WorkMetadata.IStore>(({ work }) => work, shallowEqual);

  return {
    title,
    price,
    description,
    state,
    createdAt,
    location : {
      name : user.district.province.name,
      coords : user.district.province.location
    },
    finished
  }
}

export default useWorkDetailInit;