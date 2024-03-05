import { useState } from 'react';
import { todos } from '../../utils/todos';
import { TodoList } from '../TodoList';
import './App.scss';
import { AddTodo } from '../AddTodo';
import { Todo } from '../../types/Todo';

function App() {
  const [newTodos, setNewTodos] = useState(todos as Todo[]);

  return (
    <div className="App">
      <AddTodo todos={newTodos} addNewTodo={setNewTodos} />
      <TodoList todos={newTodos} />
    </div>
  );
}

export default App;
