import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import useIsWholeNumber from "../../../hooks/useIsWholeNumber";
import useStarAmount from "../../../hooks/useStarAmount";
import { setWorkerDetailData } from "../../../redux/reducers/Worker/actions/sync";
import { WorkerMetadata } from "../../../redux/reducers/Worker/metadata";

const useGlobalWorkerCard = (worker : WorkerMetadata.IWorker) => {
  const { user , puntuaction , specialty , basePrice } = worker;
  const { name , lastname, description , profileImage } = user;

  //Hooks
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const stars = useStarAmount(puntuaction);
  const isWholeNumber = useIsWholeNumber(basePrice);
  
  const NavigateToWorkerDetail = () => {
    dispatch(setWorkerDetailData(worker));
    navigate('worker-detail');
  }

  const NavigateToChat = () => navigate('worker-chat');

  return {
    username : `${name} ${lastname}`,
    description,
    profileImage,
    stars,
    specialty : specialty.name,
    basePrice : isWholeNumber ? basePrice + '.00' : basePrice,
    NavigateToWorkerDetail,
    NavigateToChat
  }
}

export default useGlobalWorkerCard;