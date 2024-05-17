import IconButton from "./IconButton";
import { CrossIcon } from "./Icons";

function TaskItem(props) {
  const { task, complete, deleteTask } = props;
  const { id, completed, text } = task;

  return (
    <li className="flex gap-x-6 px-6 py-4">
      <input
        type="checkbox"
        name={id}
        id={id}
        defaultChecked={completed}
        onChange={() => complete({ ...task, completed: !completed })}
      />
      <label
        htmlFor={id}
        className={`task-label peer select-none leading-6 ${
          completed ? "completed" : ""
        }`}
      >
        {text}
      </label>
      <IconButton
        className="ml-auto self-start opacity-0 hover:opacity-100 peer-hover:opacity-100"
        icon={<CrossIcon />}
        label="Delete task"
        handleClick={() => deleteTask(id)}
      />
    </li>
  );
}

export default TaskItem;
