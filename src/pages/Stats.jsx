import { useTasks } from "../store/taskContext";

const Stats = () => {
  const { tasks } = useTasks();

  const completed = tasks.filter(t => t.completed).length;

  return (
    <main>
      <div className="page">
    <div className="stats">
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Remaining: {tasks.length - completed}</p>
    </div>
      </div>
    </main>
  );
};

export default Stats;
