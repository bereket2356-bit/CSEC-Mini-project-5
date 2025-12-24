import { useTasks } from "../store/taskContext";

const TaskItem = ({ task }) => {
  const { tasks, setTasks } = useTasks();

  const toggleComplete = () => {
    setTasks(
      tasks.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      <span>{task.text}</span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;
