import React from 'react'

const Tasks = ({ title, description, deleteTask ,index}) => {
  return (
    <div className="tasks">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button onClick={() => deleteTask(index)}>x</button>
    </div>
  );
};

export default Tasks