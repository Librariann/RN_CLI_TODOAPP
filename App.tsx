import React from 'react';
import styled from 'styled-components/native';
import DateHead from './components/DateHead';

const SafeAreaView = styled.SafeAreaView``;

const App = () => {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaView>
      <DateHead date={today} />
    </SafeAreaView>
  );
};

export default App;
