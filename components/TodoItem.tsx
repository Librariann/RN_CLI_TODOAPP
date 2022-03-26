import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  id: number;
  text: string;
  done: boolean;
  onToggle: Function;
  onRemove: Function;
}

interface IComplete {
  complete: boolean;
}

const ViewItem = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
`;

const ViewCircle = styled.View<IComplete>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-color: #26a69a;
  border-width: 1px;
  margin-right: 16px;
  ${props =>
    props.complete &&
    css`
      justify-content: center;
      align-items: center;
      background-color: #26a69a;
    `}
`;

const Text = styled.Text<IComplete>`
  flex: 1;
  font-size: 16px;
  color: #212121;
  ${props =>
    props.complete &&
    css`
      color: #9e9e9e;
      text-decoration-line: line-through;
    `}
`;
const Image = styled.Image``;
const RemoveView = styled.View`
  width: 32px;
  height: 32px;
`;

const TodoItem = ({id, text, done, onToggle, onRemove}: IProps) => {
  const remove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            onRemove(id);
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismis: () => {},
      },
    );
  };
  return (
    <ViewItem>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <ViewCircle complete={done}>
          <Image
            source={require('../assets/icons/check_white/check_white.png')}
          />
        </ViewCircle>
      </TouchableOpacity>
      <Text complete={done}>{text}</Text>
      {done ? (
        <TouchableOpacity onPress={remove}>
          <Icon name="delete" size={32} color="red" />
        </TouchableOpacity>
      ) : (
        <RemoveView />
      )}
    </ViewItem>
  );
};

export default TodoItem;
