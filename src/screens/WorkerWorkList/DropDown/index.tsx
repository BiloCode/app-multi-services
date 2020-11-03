import React, { FC, memo } from 'react';
import * as DDS from './styles';
import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import HideContent from './components/HideContent';
import WorkCard from './components/WorkCard';
import { WorkMetadata } from '../../../redux/reducers/Work/metadata';

interface IProps {
  title : string;
  works : WorkMetadata.IWork[];
  isLoading : boolean;
  isOpen : boolean;
  onPress?() : void;
}

const DropDown : FC<IProps> = ({ title , works , isLoading , isOpen , onPress }) => {
  const numberOfWorks = works.length > 9 ? '9+' : works.length;

  return <DDS.Container>
    <DDS.DropHeader as={TouchableOpacity} onPress={onPress} >
      <DDS.DropHeaderTitleContainer>
        
        {
          isLoading ? 
            <ActivityIndicator size={10} color='#fff' /> :
            <DDS.WorksIndicatorContainer>
              <DDS.WorksIndicator>{numberOfWorks}</DDS.WorksIndicator>
            </DDS.WorksIndicatorContainer>
        }
        <DDS.DropHeaderTitle>{title}</DDS.DropHeaderTitle>
      </DDS.DropHeaderTitleContainer>
      <AntDesign name="downcircleo" size={15} color="#fff" />
    </DDS.DropHeader>
    { 
      (isOpen && !isLoading) && (
        <HideContent>
          { 
            works.map((v,i) => <WorkCard key={i} data={v} />)
          }
        </HideContent>
      )
    }
  </DDS.Container>
}

export default memo(DropDown);