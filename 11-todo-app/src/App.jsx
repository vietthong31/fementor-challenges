import { useEffect, useReducer, useState } from "react";

import IconButton from "./components/IconButton";
import { MoonIcon, SunIcon } from "./components/Icons";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import initialTasks from "./tasks";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);

  function addTask(completed, text) {
    console.log(completed, text);
    const id = tasks.length === 0 ? 0 : tasks.length + 1;
    dispatch({ type: "add", text: text, completed: completed, id: id });
  }

  function complete(task) {
    dispatch({ type: "complete", task: task });
  }

  function deleteTask(id) {
    console.log(id);
    dispatch({ type: "delete", id: id });
  }

  function clearCompleted() {
    dispatch({ type: "clearCompleted" });
  }

  return (
    <>
      <header className="flex w-3/4 justify-between lg:w-2/5">
        <h1 className="text-2xl font-bold tracking-[0.5em] text-white sm:text-4xl">
          TODO
        </h1>
        <IconButton
          className="-translate-y-1 overflow-visible leading-7"
          icon={darkMode ? <SunIcon /> : <MoonIcon />}
          handleClick={toggleDarkMode}
          label="Toggle dark mode"
        />
      </header>
      <main className="w-3/4 lg:w-2/5">
        <TaskForm onSubmit={addTask} />
        <TaskList
          tasks={tasks}
          complete={complete}
          deleteTask={deleteTask}
          clearCompleted={clearCompleted}
        />
      </main>
    </>
  );
}

function taskReducer(tasks, action) {
  switch (action.type) {
    case "add":
      return [
        ...tasks,
        { id: action.id, completed: action.completed, text: action.text },
      ];
    case "complete":
      console.log(action.task);
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    case "delete":
      tasks.forEach((t) => console.log(t.id, action.id));
      return tasks.filter((task) => task.id !== action.id);
    case "clearCompleted":
      return tasks.filter((task) => !task.completed);

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export default App;
