import { TodoDataType } from './types';
const handleData = {
  getData: () => {
    const todoData = localStorage.getItem('todoData');
    if (todoData === null) {
      return [];
    } else {
      return JSON.parse(todoData);
    }
  },
  saveData: (text: string, todoData: TodoDataType[]) => {
    const currentDate = new Date().toLocaleDateString(); 
    const currentData = {
      id: Math.random().toString(36).slice(2),
      text: text,
      date: currentDate,
    }
    const updateTodoArray = [...todoData, currentData];
    localStorage.setItem('todoData', JSON.stringify(updateTodoArray));
    return updateTodoArray;
  },
  deleteData: (id: any, todoData: TodoDataType[]) => {
    const findTodo = todoData.filter((todo) => todo.id !== id);
    localStorage.setItem('todoData', JSON.stringify(findTodo));
    return findTodo;
  }
};

export default handleData;






