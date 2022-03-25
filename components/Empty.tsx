import React from 'react';
import styled from 'styled-components/native';

const BlockView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const TextDesc = styled.Text`
  font-size: 24px;
  color: #9e9e9e;
`;
const Image = styled.Image`
  width: 240px;
  height: 179px;
`;

const Empty = () => {
  return (
    <BlockView>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        resizeMode="stretch"
      />
      <TextDesc>야호! 할 일이 없습니다~~!</TextDesc>
    </BlockView>
  );
};

export default Empty;
