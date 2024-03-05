import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import FilterDropdown from '../components/FilterDropdown';
import taskService from '../services/taskService';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    taskService.getAllTasks().then(data => {
      setTasks(data);
      setFilteredTasks(data);
    });
  }, []);

  const handleAddTask = (task) => {
    taskService.createTask(task).then(newTask => {
      setTasks([...tasks, newTask]);
      if (filter === 'all' || newTask.status === filter) {
        setFilteredTasks([...filteredTasks, newTask]);
      }
    });
  };

  const handleUpdateStatus = (taskId) => {
    taskService.updateTaskStatus(taskId).then(updatedTask => {
      const updatedTasks = tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks.filter(task => filter === 'all' || task.status === filter));
    });
  };

  const handleDeleteTask = (taskId) => {
    taskService.deleteTask(taskId).then(() => {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks.filter(task => filter === 'all' || task.status === filter));
    });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    if (e.target.value === 'all') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter(task => task.status === e.target.value));
    }
  };

  return (
    <div>
      <h1>Task Management</h1>
      <TaskForm onSubmit={handleAddTask} />
      <FilterDropdown onChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} onUpdateStatus={handleUpdateStatus} onDelete={handleDeleteTask} />
    </div>
  );
};

export default TaskPage;
