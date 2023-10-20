import React from "react";
import { FaPlus } from "react-icons/fa"

export default function AddTask({ newTask, setNewTask, handleSubmit }) {

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addForm">Add Task</label>
      <input
        autoFocus
        id='addTask'
        type='text'
        placeholder="Add Item"
        required
        value={newTask}
        onChange={({ target }) => setNewTask(target.value)}
      />
      <button
        type="submit"
        aria-label='Add Item'
      >
        <FaPlus/>
      </button>
    </form>
  )
}