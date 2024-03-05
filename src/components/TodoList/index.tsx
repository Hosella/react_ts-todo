import { FC } from "react";
import { Todo } from "../../types/Todo";
import { TodoItem } from "../TodoItem";
import './style.scss';

type Props = {
  todos: Todo[];
}

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id}/>
      ))}
    </div>
  );
}
