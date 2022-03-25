import React from 'react';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import styled from 'styled-components/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const App = () => {
  const today = new Date();
  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={['bottom']}
        style={{flex: 1, backgroundColor: 'white'}}>
        <KeyboardAvoidingView behavior={Platform.select({ios: 'padding'})}>
          <DateHead date={today} />
          <Empty />
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
