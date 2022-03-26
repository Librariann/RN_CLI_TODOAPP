import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import TodoItem from './TodoItem';

interface ITodos {
  id: number;
  text: string;
  done: boolean;
}

interface ITodosList {
  todos: ITodos[];
  onToggle: Function;
  onRemove: Function;
}

const SeparatorView = styled.View`
  background-color: #e0e0e0;
  height: 1px;
`;

const TodoList = ({todos, onToggle, onRemove}: ITodosList) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <SeparatorView />}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TodoList;
