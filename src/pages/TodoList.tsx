import React, {ChangeEvent, FC, useState} from 'react';
import Task from "../models/Task.domain";
import './TodoList.css';
import TodoTask from "../components/todo/TodoTask";

const TodoList: FC = () => {

  const [taskName, setTaskName] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTaskName(event.target.value);
    } else if (event.target.name === "deadline") {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = () => {
    const newTask = {taskName: taskName, deadline: deadline};
    setTodoList([...todoList, newTask]);
    setTaskName("");
    setDeadline(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." name="task" onChange={handleChange}
                 value={taskName}/>
          <input type="number" placeholder="Deadline (in Days)..." name="deadline" onChange={handleChange}
                 value={deadline}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
      </div>

      <div className="todoList">
        {todoList.map((task: Task, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;