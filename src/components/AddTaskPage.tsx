import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddTaskPage.css';

const AddTaskPage = ({ getData, ...props }: any) => {
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = (data: any) => {
    if (taskTitle.trim() === '') return;

    // Code to add task to local storage...
    getData({ id: Math.round(Math.random() * 100), title: taskTitle });
    setTaskTitle('');
  };

  return (
    <div className="container">
      <h1 className="title">Add Task</h1>
      <input
        type="text"
        className="form-control"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={addTask} className="add-button btn btn-success">
        Add
      </button>
      <br />
      <Link to="/task-list" className="link">
        View Task List
      </Link>
    </div>
  );
};

export default AddTaskPage;
