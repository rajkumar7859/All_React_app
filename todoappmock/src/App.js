import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
          <Route index element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
