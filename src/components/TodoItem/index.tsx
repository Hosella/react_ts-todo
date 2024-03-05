import { FC, useMemo } from "react";
import { Todo } from "../../types/Todo"
import { users } from "../../utils/users";
import { User } from "../../types/User";
import './style.scss'

type Props = {
  todo: Todo;
}

export const TodoItem: FC<Props> = ({ todo }) => {
  const { userId, title } = todo;

  let newUser = useMemo(() => {
    return users.find(user => user.id === userId) || {}
  }, [userId]) as User;

  return(
    <div className='ToDoItem'>
      <span className='ToDoItem__title'>{title}</span>
      <br />
      <span>
        <span>{newUser.username}</span>
        <br />
        <a href={`mailto:${newUser.email}`} className="ToDoItem__link">{newUser.name}</a>
      </span>
    </div>
  );
}
