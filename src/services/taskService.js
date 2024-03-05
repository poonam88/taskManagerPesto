import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Update with your backend URL
//const BASE_URL = 'http://localhost:3001'; // Update this URL to match your backend server

const taskService = {
  getAllTasks: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/tasks`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },

  createTask: async (taskData) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/tasks`, taskData);
      return response.data;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  },

  updateTask: async (taskId, taskData) => {
    try {
      const response = await axios.put(`${BASE_URL}/api/tasks/${taskId}`, taskData);
      return response.data;
    } catch (error) {
      console.error(`Error updating task ${taskId}:`, error);
      throw error;
    }
  },

  deleteTask: async (taskId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting task ${taskId}:`, error);
      throw error;
    }
  }
};

export default taskService;
