import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TaskListPage.css';

interface Task {
  id: number;
  title: string;
}

const TaskListPage = ({ taskData, ...props }: any) => {
  const tasksData: string = localStorage.getItem('tasksData') || '';
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (localStorage?.getItem('tasksData') && tasksData !== 'undefined' && tasksData !== null) {
      setTasks(JSON.parse(tasksData));
    }
  }, []);

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasksData', JSON.stringify(updatedTasks));
  };

  return (
    <div className="container">
      <h1 className="title">Task List</h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className='add-task-list'>
            {task.title}
            <button onClick={() => deleteTask(task.id)} className="btn btn-success btn-sm delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Link to="/" className="link">
        Go back
      </Link>
    </div>
  );
};

export default TaskListPage;


