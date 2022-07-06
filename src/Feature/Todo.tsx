import React, { useState, useEffect } from 'react';
import Modal from '../Components/Modal';
import TableUI from '../Components/Table';
import Button from '../Components/Button';
import handleData from '../utils/handleData';
import { TodoDataType } from '../utils/types';

import './index.scss';

const App: React.FC =  () => {
  const [todoData, setTodoData] = useState<TodoDataType[]>([]);
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<Boolean>(false);
  const [text, setText] = useState<string>('');
  const [selected, setSelected] = useState<TodoDataType | null>();
  const handleOpen = () => setOpenModal(!openModal);

  useEffect(() => {
    const getTodos = handleData.getData();
    setTodoData(getTodos)
  },[]);

  const toggleDelete = (data: TodoDataType) => {
    setOpenDeleteModal(true);
    setSelected(data);
  };

  const handleSave = () => {
    const save = handleData.saveData(text, todoData)
    setText('');
    setOpenModal(false);
    setOpenDeleteModal(false);
    setTodoData(save);
  };
  
  const handleTodo = () => {
    const deleteTodo = handleData.deleteData(selected?.id, todoData);
    setTodoData(deleteTodo)
    setOpenDeleteModal(false)
    setSelected(null);
  };

  const DeleteTodo = () => (
    <Modal 
      title="Delete todo"
      setOpenModal={setOpenDeleteModal}
    >
      <input 
        type="text" 
        name="delete" 
        value={`Are you sure you want to delete ${selected?.id}`}
        placeholder="Are you sure you want to delete"
        disabled
      />
      <div className="todo__modal-button">
        <Button 
          onClick={handleTodo}
          text='Yes'
          height='40px'
          width= '50px;'
        />
        <Button 
          onClick={() => setOpenDeleteModal(false)}
          text='No'
          height='40px'
          width= '50px;'
        />
      </div>
    </Modal>
  );

  return (
    <div className="todo">
      <h1>Todos</h1>
      <Button 
        onClick={handleOpen}
        text='Add Todo'
        height='70px'
        width= '114px'
      />
      {
      todoData.length === 0 
        ? <h3 className="todo__empty-state">You don't have any todos</h3>
        : <TableUI data={todoData} handleDelete={toggleDelete} />
      }
      {openModal && <Modal 
        setOpenModal={setOpenModal} 
        title="Add new todo"
      >
        <div className="todo__modal">
          <input 
            type="text" 
            name="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Add new todos"
          />
          <Button 
            onClick={handleSave}
            text='Save'
            height='40px'
          />
        </div>
      </Modal> }
      {openDeleteModal && <DeleteTodo />}
    </div>
  );
}

export default App;
