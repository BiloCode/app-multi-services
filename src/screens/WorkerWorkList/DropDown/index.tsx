import React, { FC, memo } from 'react';
import * as DDS from './styles';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import useDropDown from './hooks/useDropDown';
import HideContent from './components/HideContent';
import WorkCard from './components/WorkCard';

interface IProps {
  title : string;
  works : any[]
}

const DropDown : FC<IProps> = ({ title , works }) => {
  const { ToggleHideContent , isOpen } = useDropDown();

  return <DDS.Container>
    <DDS.DropHeader as={TouchableOpacity} onPress={ToggleHideContent} >
      <DDS.DropHeaderTitle>{title}</DDS.DropHeaderTitle>
      <AntDesign name="downcircleo" size={15} color="#fff" />
    </DDS.DropHeader>
    { 
      isOpen && (
        <HideContent>
          { works.map((v,i) => <WorkCard key={i} />) }
        </HideContent>
      )
    }
  </DDS.Container>
}

export default memo(DropDown);