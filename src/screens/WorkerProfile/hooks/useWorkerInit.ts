import faker from 'faker'
import { shallowEqual, useSelector } from "react-redux";
import useIsWholeNumber from "../../../hooks/useIsWholeNumber";
import { ReduxRootState } from "../../../metadata/types";
import { UserMetadata } from "../../../redux/reducers/User/metadata";

const useWorkerInit = () => {
  const {
    workerInformation : {
      basePrice,
      availability,
      specialty,
      user
    }
  } = useSelector<ReduxRootState,UserMetadata.IStore>(({ user }) => user, shallowEqual);

  const isWholeNumber = useIsWholeNumber(basePrice!);
  const { fullName , profileImage, description } = user!;

  return {
    fullName,
    profileImage,
    description,
    basePrice : isWholeNumber ? basePrice! + '.00' : basePrice!,
    specialty : specialty!.name,
    availability : availability!,
    stars : 5
  }
}

export default useWorkerInit;