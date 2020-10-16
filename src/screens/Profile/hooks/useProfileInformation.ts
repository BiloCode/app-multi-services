import { shallowEqual, useSelector } from "react-redux";
import faker from 'faker';
import moment from 'moment';
import { ReduxRootState } from "../../../metadata/types";
import { UserMetadata } from "../../../redux/reducers/User/metadata";

const useProfileInformation = () => {
  const {
    userInformation : {
      profileImage,
      district,
      createdAt,
      fullName,
      description
    }
  } = useSelector<ReduxRootState,UserMetadata.IStore>(({ user }) => user, shallowEqual);

  return {
    profileImage : profileImage ? profileImage : 'https://s5.postimg.cc/537jajaxj/default.png',
    fullName,
    description : description,
    location : `${district!.name} / ${district!.province.name}`,
    createdAt : `Se unio en ${moment(createdAt).format('LL')}`
  }
}

export default useProfileInformation;