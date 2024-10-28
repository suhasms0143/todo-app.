// todo-frontend/pages/index.js
import TaskList from '../components/TaskList';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <TaskList />
    </div>
  );
}
