import { useContext } from "react";
import { MessageListScrollContext } from "../context/MessageListScroll";

const useScrollToEndMessageList = () => {
  const { scrollView } = useContext(MessageListScrollContext);

  return () => {
    scrollView.current?.scrollToEnd();
  }
}

export default useScrollToEndMessageList;