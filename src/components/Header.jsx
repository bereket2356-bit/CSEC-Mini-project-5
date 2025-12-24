import { useTasks } from "../store/taskContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { darkMode, setDarkMode } = useTasks();

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <nav>
        <Link className="homelink" to="/">Home</Link>
        <Link className="homelink" to="/stats">Stats</Link>
      </nav>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
