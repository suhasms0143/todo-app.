// todo-frontend/components/TaskList.js
import React, { useState, useEffect } from 'react';
import useTaskStore from '../store/taskStore';

const TaskList = () => {
  const { tasks, fetchTasks, addTask } = useTaskStore();
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = () => {
    addTask({ title, recurrence: 'daily' });
    setTitle('');
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title} - {task.recurrence}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
