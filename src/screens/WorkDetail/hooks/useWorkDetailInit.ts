import moment from 'moment';
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
  
  console.log(user);

  return {
    title,
    price,
    description,
    state,
    createdAt : moment(createdAt).format('DD/MM/YYYY'),
    finished : finished ? moment(finished).format('DD/MM/YYYY') : '',
    location : {
      name : user.district.province.name,
      coords : user.district.province.location
    }
  }
}

export default useWorkDetailInit;