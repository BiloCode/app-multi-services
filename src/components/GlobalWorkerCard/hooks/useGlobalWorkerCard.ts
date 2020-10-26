import { useNavigation } from "@react-navigation/native";
import { lorem } from "faker";
import { useDispatch } from "react-redux";
import useIsWholeNumber from "../../../hooks/useIsWholeNumber";
import useNavigateToChatScreen from "../../../hooks/useNavigateToChatScreen";
import useStarAmount from "../../../hooks/useStarAmount";
import { setWorkerDetailData } from "../../../redux/reducers/Worker/actions/sync";
import { WorkerMetadata } from "../../../redux/reducers/Worker/metadata";

const useGlobalWorkerCard = (worker : WorkerMetadata.IWorker) => {
  const GoToChat = useNavigateToChatScreen();
  const { user , puntuaction , specialty , basePrice , id } = worker;
  const { fullName , description , profileImage } = user;

  //Hooks
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const stars = useStarAmount(puntuaction || 0);
  const isWholeNumber = useIsWholeNumber(basePrice);
  
  const NavigateToWorkerDetail = () => {
    dispatch(setWorkerDetailData(worker));
    navigate('worker-detail');
  }

  const NavigateToChat = () => {
    GoToChat({
      id : id!,
      fullName,
      basePrice,
      profileImage,
      specialty : specialty.name,
      userType : 'worker'
    });
  }

  return {
    username : fullName,
    description : description || lorem.words(30),
    profileImage,
    stars,
    specialty : specialty.name,
    basePrice : isWholeNumber ? basePrice + '.00' : basePrice,
    NavigateToWorkerDetail,
    NavigateToChat
  }
}

export default useGlobalWorkerCard;