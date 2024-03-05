import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdateStatus, onDelete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onUpdateStatus={onUpdateStatus} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
