import { useState } from "react";

import Button from "./Button";
import TaskItem from "./TaskItem";

const buttonNames = ["All", "Active", "Completed"];

function TaskList({ tasks, complete, deleteTask, clearCompleted }) {
  const [show, setShow] = useState("All");

  function filterTask(button) {
    setShow(button);
  }

  const taskLeft = tasks.filter((task) => !task.completed).length;
  let showTasks;
  if (show === "All") {
    showTasks = tasks;
  } else if (show === "Active") {
    showTasks = tasks.filter((t) => !t.completed);
  } else {
    showTasks = tasks.filter((t) => t.completed);
  }

  const buttons = buttonNames.map((button) => (
    <Button
      key={button}
      id={button}
      className={`filter-button ${show === button ? "active" : ""}`}
      content={button}
      handleClick={() => filterTask(button)}
    />
  ));

  return (
    <>
      <div className="shadow">
        <ul className="">
          {showTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              complete={complete}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
        <div className="flex gap-x-6 px-6 py-4 text-light-blue-darkGrayish">
          <span className="mr-auto">{taskLeft} items left</span>
          <div className="hidden gap-x-6 sm:flex">{buttons}</div>
          <Button
            className="ml-auto hover:text-light-blue-veryDarkGrayish hover:dark:text-dark-blue-lightGrayish2"
            content="Clear Completed"
            handleClick={clearCompleted}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-x-6 px-6 py-4 text-light-blue-darkGrayish shadow lg:relative lg:-z-10 lg:-translate-y-[200%]">
        {buttons}
      </div>
    </>
  );
}

export default TaskList;
