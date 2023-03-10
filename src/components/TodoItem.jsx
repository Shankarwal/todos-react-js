import { useSelector, useDispatch } from "react-redux";
import {
  toggleTodo,
  deleteTodo,
  selectTodoById,
} from "../store/todos/todoReducer";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));
  const dispatch = useDispatch();
  const { text, completed } = todo;

  const handleChange = (e) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className="list-item">
      <div className="todo-desc">
        <input
          className="toggle"
          type="checkbox"
          onChange={handleChange}
          checked={completed}
        />
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {text}
        </span>
      </div>
      <span className="close" onClick={handleDelete}>
        <AiOutlineDelete />
      </span>
    </li>
  );
};

export default TodoItem;
