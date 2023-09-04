import './App.css';
import TaskList from './components/TaskList';
import TaskCreate from './components/Taskcreate';
import { useEffect, useContext } from 'react';
import TasksContext from './context/task';


function App() {
 
  const {fetchTasks}=useContext(TasksContext);
  useEffect(() => {
    fetchTasks();
  
},[])
 
  return (
    <div className="App">
     <TaskCreate/>
     <h1>Görevler</h1>
     <TaskList />
    </div>
  );
}

export default App;
