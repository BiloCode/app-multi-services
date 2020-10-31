import { useState } from "react";

const useChangeProfileImage = (image : string) => {
  const [ profileImage , setProfileImage ] = useState<string>(image);
  const [ editImageEnabled , setEditImageEnabled ] = useState<boolean>(false);

  const ChangeProfileImage = () => {
    /*console.log('Changed...');
    setEditImageEnabled(() => !editImageEnabled);*/
    alert('En proceso...')
  }

  return {
    profileImage,
    editImageEnabled,
    ChangeProfileImage
  }
}

export default useChangeProfileImage;