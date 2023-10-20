import { set } from "date-fns";
import React from "react";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import AddTask from "./AddTask";

export default function Tasks({date}){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem(date));
    if (list) {
      setTasks(JSON.parse(localStorage.getItem(date)));
    } else {
      setTasks([])
    }
  },[date])

  useEffect(() => {
    if (tasks.length){
      localStorage.setItem(date, JSON.stringify(tasks));
    }
  }, [tasks])

  const addTask = (task) => {
    const lenght = tasks.length;
    const id = lenght ? tasks[lenght -1].id + 1 : 1;
    const newTask = { id, checked: false, task };
    const newTasks= [...tasks, newTask]
    setTasks(newTasks);
  }

  const handleCheck = (id) => {
    const newTasks = tasks.map((task) => task.id === id ? {...task, checked: !task.checked} : task);
    setTasks(newTasks);
  }

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!newTask) return;
    addTask(newTask);
    setNewTask('');
  }

  return(
    <main>
      <h2>To Do Tasks:</h2>
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      {tasks.length ? (
         <ul>
         {tasks.map((task) => (
           <li key={task.id}>
             <input
               type='checkbox'
               onChange={() => handleCheck(task.id)}
               checked={task.checked}
             />
             <label>{task.task}</label>
             <FaTrashAlt
               onClick={() => handleDelete(task.id)} 
               role='button' 
               tabIndex='0'
             />
           </li>
         ))}
       </ul>
      ) : (
        <p>There are no tasks to do!</p>
      )}
    </main>
  )
}