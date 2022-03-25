import React from 'react';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IDateProps {
  date: Date;
}

const ViewTop = styled.View`
  background-color: #26a69a;
`;
const View = styled.View`
  padding: 16px;
  background-color: #26a69a;
`;
const Text = styled.Text`
  font-size: 24px;
  color: #fff;
`;
const StatusBar = styled.StatusBar``;

const DateHead = ({date}: IDateProps) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;
  const {top} = useSafeAreaInsets();
  return (
    <>
      <ViewTop style={[{height: top}]} />
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View>
        <Text>{formatted}</Text>
      </View>
    </>
  );
};

export default DateHead;
