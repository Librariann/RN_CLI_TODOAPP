import React, {useState} from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import styled from 'styled-components/native';

const BlockView = styled.View`
  background-color: white;
  height: 64px;
  padding-left: 16px;
  padding-right: 16px;
  border-color: #bdbdbd;
  border-top-width: 1px;
  border-bottom-width: 1px;
  align-items: center;
  flex-direction: row;
`;
const ButtonStyleView = styled.View`
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #26a69a;
  border-radius: 24px;
`;
const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
const CircleWrapper = styled.View`
  overflow: hidden;
  border-radius: 24px;
`;
const Image = styled.Image``;

const AddTodo = () => {
  const [text, setText] = useState('');
  const onPress = () => {
    setText('');
    Keyboard.dismiss();
  };
  const button = (
    <ButtonStyleView>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </ButtonStyleView>
  );
  return (
    <BlockView>
      <TextInput
        placeholder="할 일을 입력하세요"
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <CircleWrapper>
            <TouchableNativeFeedback onPress={onPress}>
              {button}
            </TouchableNativeFeedback>
          </CircleWrapper>
        ),
      })}
    </BlockView>
  );
};

export default AddTodo;
