import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ReduxRootState } from "../../../metadata/types";
import { SpecialtyMetadata } from "../../../redux/reducers/Specialty/metadata";

const useSelectAction = () => {
  const [ itemSelected , setItemSelected ] = useState<number>(0);
  const state = useSelector<ReduxRootState,SpecialtyMetadata.IStore>(({ specialties }) => specialties, shallowEqual);

  const onChangeValue = (item , index) => setItemSelected(() => item);

  return {
    list : state.list,
    onChangeValue,
    itemSelected
  }
}

export default useSelectAction;