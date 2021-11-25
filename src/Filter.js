import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = ({ tasks, done }) => {
  const dispatch = useDispatch();
  const sfilter = useSelector((state) => state.todoReducer.filter);
  return (
    <div>
      <h1>Filter</h1>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => dispatch({ type: "FILTER", payload: e.target.value })}
      >
        <option selected>Done or Not</option>
        <option value="done">Done</option>
        <option value="not">Not</option>
      </select>
      <br />

      {tasks &&
        tasks
          .filter((el) => el.done === sfilter)
          .map((prod) => (
            <>
              {prod.newTask}
              <br />
              {prod.done}
              <br />
            </>
          ))}
    </div>
  );
};

export default Filter;
