import React, { useState } from 'react';

type Todo = {
  id: number;
  text: string;
}

let initialTodoList: Todo[] = [
  {
    id: 0,
    text: 'Todo list'
  },
]

export const App: React.FC = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState(initialTodoList);
  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  const handleSubmit = () => {
    const id = todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1
    setTodoList([...todoList, { id: id, text: text }]);
    setText('');
  }

  const handleDelete = (id: number) => {
    const newTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodo);
  }

  const deleteAll = () => {
    setTodoList([]);
  }

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={inputValue}
      />
      <button onClick={handleSubmit}>ADD TODO</button>
      <button onClick={deleteAll}>ALL DELETE</button>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
