import { FC, useState } from "react"
import { users } from "../../utils/users";
import { Todo } from "../../types/Todo";
import classNames from "classnames";
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

type Props = {
  todos: Todo[];
  addNewTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const AddTodo: FC<Props> = ({ todos, addNewTodo }) => {
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState(0);
  const [error, setError] = useState({title: false, user: false});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setError({title: !title, user: !userId});

    if (userId <= 0 || !title) {
      return;
    }

    addNewTodo([...todos, {
      id: uuidv4(),
      title: title,
      userId: userId,
      completed: false
    }])

    setTitle('');
    setUserId(0);
  }

  return (
    <div className="AddTodo">
      <form onSubmit={handleSubmit} className="AddTodo__form">
        <label htmlFor="title">Task:</label>

        <input
          type="text"
          id="title"
          className={classNames('AddTodo__input', {'error' : error.title})}
          value={title}
          onChange={event => {
            setTitle(event.target.value);
            setError({...error, title: false});
          }}
        />

        {error.title && (
          <p className='error_text'>Write task</p>
        )}

        <label htmlFor="user_select">User:</label>

        <select
          id="user_select"
          className={classNames('AddTodo__input', {'error' : error.user})}
          value={userId}
          onChange={event => {
            setUserId(+event.target.value);
            setError({...error, user: false})
          }}
        >
          <option value="0">Choose a user</option>
          {users.map(user => (
            <option value={user.id} key={user.id}>{user.username}</option>
          ))}
        </select>

        {error.user && (
          <p className='error_text'>Choose a user</p>
        )}

        <button type="submit" className="AddTodo__button">Add task</button>
      </form>
    </div>
  )
}
