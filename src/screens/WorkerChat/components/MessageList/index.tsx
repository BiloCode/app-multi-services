import React from 'react';
import { ScrollView } from 'react-native';
import Message from './Message';
import * as MLS from './styles';

const MessageList = () => {
  return <MLS.Container>
    <ScrollView showsVerticalScrollIndicator={false} >
      <Message right={true} text='HOla que tal vengo a solicitar tu servicio' />
      <Message right={false} text='Haber que tal esta la cosa pues...' /> 
      <Message right={true} text='HOla que tal vengo a solicitar tu servicio' />
      <Message right={false} text='Haber que tal esta la cosa pues...' />  
      <Message right={true} text='HOla que tal vengo a solicitar tu servicio' />
      <Message right={false} text='Haber que tal esta la cosa pues...' />       
      <Message right={true} text='HOla que tal vengo a solicitar tu servicio' />
      <Message right={false} text='Haber que tal esta la cosa pues...' />  
      <Message right={true} text='HOla que tal vengo a solicitar tu servicio' />
      <Message right={false} text='Haber que tal esta la cosa pues...' />  
      <Message right={true} text='HOla que tal vengo a solicitar tu servicio' />
      <Message right={false} text='Haber que tal esta la cosa pues...' />  
      <Message right={true} text='HOla que tal vengo a solicitar tu servicio' />
      <Message right={false} text='Haber que tal esta la cosa pues...' />  
      <Message right={true} text='HOla que tal vengo a solicitar tu servicio' />
      <Message right={false} text='Haber que tal esta la cosa pues...' />  
      <Message right={true} text='HOla que tal vengo a solicitar tu servicio' />
      <Message right={false} text='Haber que tal esta la cosa pues...' />  
    </ScrollView>
  </MLS.Container>
}

export default MessageList;