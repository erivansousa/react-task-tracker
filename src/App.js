import { useState } from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist consult',
      day: 'Feb 5th at 2;30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Doctor consult',
      day: 'Feb 5th at 2;30pm',
      reminder: true
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ?  { ...task, reminder: 
        !task.reminder} : task 
      )
    )
  }

  const addTask = (task) => {
    console.log('task added')

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAddTask={() => setShowAddTask(!showAddTask)} showAdd={!showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}

      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} /> : ''
      }

    </div>
  );
}

export default App;
