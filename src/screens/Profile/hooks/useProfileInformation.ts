import { shallowEqual, useSelector } from "react-redux";
import faker from 'faker';
import moment from 'moment';
import { ReduxRootState } from "../../../metadata/types";

const useProfileInformation = () => {
  const {
    userInformation : { 
      name, 
      profileImage,
      lastname,
      description,
      district,
      createdAt
    }
  } = useSelector<ReduxRootState,any>(({ user }) => user, shallowEqual);

  return {
    profileImage : profileImage ? profileImage : 'https://s5.postimg.cc/537jajaxj/default.png',
    fullName : `${name} ${lastname}`,
    description : faker.lorem.words(25),
    location : `${district.name} / ${district.province.name}`,
    createdAt : `Se unio en ${moment(createdAt).format('LL')}`
  }
}

export default useProfileInformation;