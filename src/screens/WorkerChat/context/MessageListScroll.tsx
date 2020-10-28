import React, { createContext, createRef, FC, RefObject } from "react";
import { ScrollView } from 'react-native'

interface IContext {
  scrollView : RefObject<ScrollView>
}

const initialParams : IContext = {
  scrollView : createRef<ScrollView>()
}

export const MessageListScrollContext = createContext<IContext>(initialParams);

export const MessageListScrollProvider : FC = ({ children }) => (
  <MessageListScrollContext.Provider value={initialParams}>
    {children}
  </MessageListScrollContext.Provider>
);