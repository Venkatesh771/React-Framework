// src/components/Todo.js

import React from 'react';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="todo">
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default Todo;
