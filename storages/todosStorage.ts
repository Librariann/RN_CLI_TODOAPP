import AsyncStorage from '@react-native-community/async-storage';

interface ITodos {
  id: number;
  text: string;
  done: boolean;
}

const key = 'todos';
const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);

      if (!rawTodos) {
        //저장된 데이터가 없으면 사용안함
        throw new Error('No saved todos');
      }

      const savedTodos: ITodos[] = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error('Failed to load todos');
    }
  },
  async set(data: ITodos[]) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to load todos');
    }
  },
};

export default todosStorage;
