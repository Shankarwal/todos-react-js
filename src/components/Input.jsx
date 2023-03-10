import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todoReducer";
import { v4 as uuid } from "uuid";

const Input = () => {
  const dispatch = useDispatch();

  const handleEnter = (e) => {
    const newTodo = {
      id: uuid(),
      text: e.target.value,
      completed: false,
      date: new Date().toISOString(),
    };
    if (e.key === "Enter") {
      if (e.target.value && e.target.value.trim().length > 0) {
        dispatch(addTodo(newTodo));
        e.target.value = "";
      }
    }
  };

  return (
    <>
      <input placeholder="Add todo" type="text" onKeyDown={handleEnter} />
    </>
  );
};

export default Input;
