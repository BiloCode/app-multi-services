import React, { FC, memo } from 'react';
import * as DDS from './styles';
import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import useDropDown from './hooks/useDropDown';
import HideContent from './components/HideContent';
import WorkCard from './components/WorkCard';
import { WorkMetadata } from '../../../redux/reducers/Work/metadata';
import { colors } from '../../../config';

interface IProps {
  title : string;
  works : WorkMetadata.IWork[];
  isLoading : boolean;
}

const DropDown : FC<IProps> = ({ title , works , isLoading }) => {
  const numberOfWorks = works.length > 9 ? '9+' : works.length;
  const { ToggleHideContent , isOpen } = useDropDown();

  return <DDS.Container>
    <DDS.DropHeader as={TouchableOpacity} onPress={ToggleHideContent} >
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