import { useCallback } from "react";
import useHideModal from "../../../hooks/useHideModal";
import { WorkerState } from "../../../metadata/types";

const useRequestServiceModal = (availability : WorkerState) => {
  const { isHide , setOpen , setClose } = useHideModal();

  const openModal = useCallback(() => {
    if(availability === 'not-available'){
      alert('El especialista no se encuentra disponible actualmente, pero puede dejarle un mensaje.');
      return;
    }

    setOpen();
  },[isHide]);

  return {
    isHide,
    setClose,
    openModal
  }
}

export default useRequestServiceModal;