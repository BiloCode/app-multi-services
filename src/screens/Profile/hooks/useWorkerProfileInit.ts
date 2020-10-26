import { shallowEqual, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import useIsWholeNumber from "../../../hooks/useIsWholeNumber";
import { ReduxRootState } from "../../../metadata/types";
import { UserMetadata } from "../../../redux/reducers/User/metadata";

const useWorkerProfileInit = () => {
  const { goBack } = useNavigation();
  const {
    workerInformation : {
      availability,
      basePrice,
      specialty,
      user
    }
  } = useSelector<ReduxRootState,UserMetadata.IStore>(({ user }) => user, shallowEqual);

  const wholeNumber = useIsWholeNumber(basePrice!);

  return {
    availability,
    basePrice : wholeNumber ? basePrice! + '.00' : basePrice!,
    specialty : specialty?.name,
    fullName : user?.fullName,
    profileImage : user?.profileImage,
    description : user?.description,
    puntuaction : 3,
    BackToScreen : () => goBack()
  }
}

export default useWorkerProfileInit;