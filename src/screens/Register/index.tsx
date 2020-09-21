import React from 'react'
import RegisterStyles from './styles';
import { ScrollView } from 'react-native';
import GlobalButton from '../../components/GlobalButton';
import InputAccount from './components/InputAccount';
import InputUserInformation from './components/InputUserInformation';
import TopDesign from './components/TopDesign';

//Hooks
import useRegister from './hooks/useRegister';
import useRegisterInit from './hooks/useRegisterInit';
import useValueInput from './hooks/useValueInput';
import useValueInputSelect from './hooks/useValueInputSelect';

const Register = () => {
  const init = useRegisterInit();
  const { ChangePassword , ChangeUsername , password , username } = useValueInput();
  const { name, lastname, ChangeDepartment , ChangeDistrict , ChangeLastname, ChangeName, ChangeProvince , departmentSelected , districtSelected , provinceSelected } = useValueInputSelect();
  const { isSend , onRegister } = useRegister({
    username,
    password,
    name,
    lastname,
    districtId : districtSelected
  });

  return <RegisterStyles.Container>
    <ScrollView>
      <TopDesign />
      <InputAccount 
        onChangeUsername={ChangeUsername}
        onChangePassword={ChangePassword}
      />
      <InputUserInformation 
        departmentSelected={departmentSelected}
        districtSelected={districtSelected}
        provinceSelected={provinceSelected}
        onChangeDepartment={ChangeDepartment}
        onChangeDistrict={ChangeDistrict}
        onChangeProvince={ChangeProvince}
        onChangeLastname={ChangeLastname}
        onChangeName={ChangeName}
      />
      <RegisterStyles.ButtonContainer>
        <GlobalButton isLoading={isSend} onPress={onRegister} text='Registrarme' />   
      </RegisterStyles.ButtonContainer>
    </ScrollView>
  </RegisterStyles.Container>
}

export default Register;