import { useState } from "react";

function TaskForm({ onSubmit }) {
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleKeyUp = (e) => {
    const { shiftKey, key } = e;
    if (!shiftKey && key === "Enter" && text !== "") {
      setText("");
      setCompleted(false);
      onSubmit(completed, text);
    }
  };

  return (
    <div className="mb-4 mt-8 flex gap-x-6 px-6 py-4 shadow">
      <input
        type="checkbox"
        name="completed"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />
      <input
        type="text"
        name="text"
        value={text}
        className="w-full grow bg-inherit"
        placeholder="Create a new todo..."
        onKeyUp={handleKeyUp}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default TaskForm;
