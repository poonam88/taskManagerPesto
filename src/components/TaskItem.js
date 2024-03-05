import React from 'react';

const TaskItem = ({ task, onUpdateStatus, onDelete }) => {
  const handleUpdateStatus = () => {
    onUpdateStatus(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <span>Status: {task.status}</span>
      </div>
      <div>
        <button onClick={handleUpdateStatus}>Update Status</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
