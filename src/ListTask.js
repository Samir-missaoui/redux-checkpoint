import React from "react";
import Filter from "./Filter";

const ListTask = ({ tasks, done }) => {
  return (
    <div>
      <Filter tasks={tasks} done={done} />
    </div>
  );
};

export default ListTask;
