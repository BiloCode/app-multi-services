import { useDispatch } from "react-redux"
import { setPassword, setUsername } from "../../../redux/actions/LoginActions";

const useChangeInput = () => {
  const dispatch = useDispatch();

  const changeUsername = (value : string) => dispatch(setUsername(value));
  const changePassword = (value : string) => dispatch(setPassword(value));

  return {
    changeUsername,
    changePassword
  }
}

export default useChangeInput;