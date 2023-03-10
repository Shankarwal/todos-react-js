import Input from "./Input";
import Filters from "./Filters";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className="main">
      <div className="container">
        <form className="todo-form" onSubmit={handleSubmit}>
          <Input />
          <div className="filters">
            <Filters />
          </div>
        </form>
        <TodoList />
      </div>
    </main>
  );
};

export default Todos;
