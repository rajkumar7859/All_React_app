import Jobs from "./Components/JobObject";
import { Navbar } from "./Components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Jobs />
    </div>
  );
}
