import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Home = () => (
  <main>
    <div className="page">
      <TaskInput />
      <TaskList />
    </div>
  </main>
);

export default Home;
