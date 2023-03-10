import { StatusFilters } from "../store/todos/filterReducer";
import { setFilter } from "../store/todos/filterReducer";
import { useDispatch, useSelector } from "react-redux";
import { clearDone } from "../store/todos/todoReducer";

const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.visibilityFilter);
  const filterButtons = Object.keys(StatusFilters).map((status) => {
    const value = StatusFilters[status];
    return (
      <button
        key={value}
        className={value === activeFilter ? "btn active" : "btn"}
        onClick={() => dispatch(setFilter(value))}
      >
        {status}
      </button>
    );
  });
  return (
    <>
      {filterButtons}
      <button className="btn" onClick={() => dispatch(clearDone())}>
        Clear done
      </button>
    </>
  );
};

export default Filters;
