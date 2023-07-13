import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import TaskListPage from './components/TaskListPage';
import AddTaskPage from './components/AddTaskPage';
import HomePage from './components/Homepage';

const App: React.FC = () => {
  const navigate = useNavigate();
  const [taskData,setTaskData]=useState<any>([]);
  const handleClick = (path: any) => {
    navigate(path);
  }

  const getData=(data:any)=>{
    console.log(data)
    
      let existingData:any=localStorage.getItem('tasksData');
      console.log(existingData,'existingData')
      let temp:any;
      if(existingData !== undefined && existingData!==null){
        temp=[...JSON.parse(existingData),data]
      }else{
        temp=[data]
      }
      console.log(temp);
    localStorage.setItem('tasksData',JSON.stringify(temp))
  }
  useEffect(()=>{
    console.log(taskData,'tasks')
  })
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={()=> handleClick("/")}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add-task" onClick={()=> handleClick("/add-task")}>Add task</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="task-list" onClick={()=> handleClick("/task-list")}>View task List</a>
            </li>
          </ul>
        </div>
      </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-task" element={<AddTaskPage getData={getData}/>} />
          <Route path="/task-list" element={<TaskListPage/>} />
        </Routes>
    </>
  );
};

export default App;

