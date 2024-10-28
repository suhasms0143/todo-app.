// todo-frontend/store/taskStore.js
import create from 'zustand';

const useTaskStore = create((set) => ({
  tasks: [],
  fetchTasks: async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const tasks = await res.json();
    set({ tasks });
  },
  addTask: async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    const newTask = await res.json();
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
}));

export default useTaskStore;
