import React from "react";
import Task from "../../models/Task.domain";

interface TodoProps {
  task: Task;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: TodoProps) => {
  return (

    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
        completeTask(task.taskName);
        }}
      >
      Remove
      </button>
    </div>
  );
};

export default TodoTask;