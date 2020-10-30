import { useState } from "react"

const useMessageInput = () => {
  const [ messageText , setMessageText ] = useState<string>('');

  const ChangeMessageText = (text : string) => setMessageText(() => text);

  return {
    messageText,
    ChangeMessageText
  }
}

export default useMessageInput;