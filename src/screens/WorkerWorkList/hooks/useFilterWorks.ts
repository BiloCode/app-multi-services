import { shallowEqual, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { WorkMetadata } from "../../../redux/reducers/Work/metadata";

const useFilterWorks = () => {
  const {
    works,
    worksLoading
  } = useSelector<ReduxRootState, WorkMetadata.IStore>(({ work }) => work, shallowEqual);

  return {
    worksWaiting : works.filter(v => v.state === 'waiting-confirmation'),
    worksPendient : works.filter(v => v.state === 'pendient'),
    worksComplete : works.filter(v => v.state === 'completed'),
    worksLoading
  }
}

export default useFilterWorks;