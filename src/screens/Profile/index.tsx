import React from 'react';

//Components
import WorkerProfile from './components/WorkerProfile';

//Redux
import { shallowEqual, useSelector } from 'react-redux';
import AuthMetadata from '../../redux/reducers/Auth/metadata';
import { ReduxRootState } from '../../metadata/types';
import UserProfile from './components/UserProfile';

const Profile = () => {
  const { userAuthenticationState } = useSelector<ReduxRootState,AuthMetadata.IStore>(({ auth }) => auth, shallowEqual);

  switch(userAuthenticationState){
    case 'authentication-user':
      return <UserProfile />

    case 'authentication-worker':
      return <WorkerProfile />

    default:
      return <UserProfile />
  }
};

export default Profile;