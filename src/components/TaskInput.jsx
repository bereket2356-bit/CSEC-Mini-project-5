import { useState } from "react";
import { useTasks } from "../store/taskContext";

const TaskInput = () => {
  const [text, setText] = useState("");
  const { tasks, setTasks } = useTasks();

  const addTask = () => {
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false }
    ]);
    setText("");
  };

  return (
    <div className="task-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
