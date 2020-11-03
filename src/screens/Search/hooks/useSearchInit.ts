import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { getNearestWorkers, getNewsWorkers } from "../../../redux/reducers/Worker/actions/async";

const useSearchInit = () => {
  const dispatch = useDispatch();

  const {  
    worker : {
      main : {
        workersNearest ,
        workersNearestLoading,
        workersNew,
        workersNewLoading
      }
    },
    user : {
      userInformation : {
        district
      }
    }
  } = useSelector<ReduxRootState,ReduxRootState>(state => state, shallowEqual);

  useEffect(() => {
    dispatch(getNearestWorkers(district.province.id));
    dispatch(getNewsWorkers(district.province.id));
  },[]);

  return {
    workersNearest,
    workersNearestLoading,
    workersNew,
    workersNewLoading
  }
}

export default useSearchInit;