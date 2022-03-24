import React from 'react';
import styled from 'styled-components/native';

interface IDateProps {
  date: string;
  getFullYear?: string;
}

const View = styled.View`
  padding: 16px;
  background-color: #26a69a;
`;
const Text = styled.Text`
  font-size: 24px;
  color: #fff;
`;

const DateHead = ({date}: IDateProps) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <View>
      <Text>2021년 5월 3일</Text>
    </View>
  );
};

export default DateHead;
