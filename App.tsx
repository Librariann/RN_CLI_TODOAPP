import React, {useState, useEffect} from 'react';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import todosStorage from './storages/todosStorage';
import styled from 'styled-components/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

interface ITodos {
  id: number;
  text: string;
  done: boolean;
}

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const App = () => {
  const today = new Date();
  const [todos, setTodos] = useState<ITodos[]>([]);
  //load
  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);

  //Save
  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = (text: string) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };
  const onToggle = (id: number) => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };
  const onRemove = (id: number) => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={['bottom']}
        style={{flex: 1, backgroundColor: 'white'}}>
        <KeyboardAvoidingView behavior={Platform.select({ios: 'padding'})}>
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
