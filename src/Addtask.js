import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListTask from "./ListTask";

const Addtask = () => {
  const tasks = useSelector((state) => state.todoReducer.todo);
  const dispatch = useDispatch();
  const [newTask, setnewTask] = useState("");
  const [done, setdone] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: { newTask, done } });
  };

  return (
    <div>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => setdone(e.target.value)}
      >
        <option selected>Done or Not</option>
        <option value="done">Done</option>
        <option value="not">Not</option>
      </select>
      <input
        type="text"
        placeholder="Task description"
        onChange={(e) => setnewTask(e.target.value)}
      />
      <button onClick={handleInput}>Add Task</button>
      <br />
      <ListTask tasks={tasks} done={done} />
    </div>
  );
};

export default Addtask;
