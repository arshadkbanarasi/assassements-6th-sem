import React, { useState } from 'react';

enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

interface Task {
  id: number;
  description: string;
  priority: Priority;
  completed: boolean;
}

interface TaskProps {
  task: Task;
  onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskProps> = ({ task, onToggle }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: 10, margin: 10, borderRadius: 6 }}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span style={{ marginLeft: 10, textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.description} ({task.priority})
      </span>
    </div>
  );
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<Priority>(Priority.Low);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  const addTask = () => {
    if (description.trim() === '') return;
    const newTask: Task = {
      id: Date.now(),
      description,
      priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setDescription('');
    setPriority(Priority.Low);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
      <h2>📝 Task Manager</h2>

      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
        />
        <select value={priority} onChange={e => setPriority(e.target.value as Priority)} style={{ width: '100%', padding: 8 }}>
          <option value={Priority.Low}>Low</option>
          <option value={Priority.Medium}>Medium</option>
          <option value={Priority.High}>High</option>
        </select>
        <button onClick={addTask} style={{ marginTop: 10, padding: 10, width: '100%' }}>
          Add Task
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <strong>Filter:</strong>
        <div>
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
