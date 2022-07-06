import React from 'react';
import { TodoDataType } from '../utils/types';
import Button from './Button';

interface Props {
  data: TodoDataType[];
  handleDelete: (data: TodoDataType) => void;
}

const TableUI:React.FC<Props>  = ({ data, handleDelete }) => (
  <table className="todo__table">
      <thead>
        <tr>
          <th className="todo__table-title">#</th>
          <th className="todo__table-title">Text</th>
          <th className="todo__table-title">Date</th>
        </tr>
      </thead>
        {
          data.map(({ id, date, text }: TodoDataType) => (
            <tbody className="todo__table-body" key={id}>
            <tr>
            <td className="todo__table-value">{id}</td>
            <td className="todo__table-value">{text}</td>
            <td className="todo__table-value">{date}</td>
            <td className="todo__table-value">
            <Button 
              text="Delete" 
              onClick={() => handleDelete({ id, date, text })}
              height='40px'
              color='red'
              borderColor='red'
            />
            </td>
            </tr> 
          </tbody>
          ))
        }
    </table>
)

export default TableUI;
