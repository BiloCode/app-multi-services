import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReduxRootState } from "../../../../../metadata/types";

const useSendMessage = (message : string) => {
  const { userInformation } = useSelector<ReduxRootState, any>(({ user }) => user, shallowEqual);
  const dispatch = useDispatch();

  const SendMessage = () => {
    const payload = {
      message,
      id : userInformation.id
    }

    console.log(payload);
  }

  return SendMessage;
}

export default useSendMessage;