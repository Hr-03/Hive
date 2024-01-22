// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import NavigationBar from './Components/NavigationBar';
import Dashboard from './HQ planner/Dashboard';
import Tasks from './HQ planner/Tasks';
import ScheduleTask from './HQ planner/ScheduleTask';

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/sbar' element={<Sidebar/>}/>
      <Route path='/nvbar' element={<NavigationBar/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
      <Route path='/sched-task' element={<ScheduleTask/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
  