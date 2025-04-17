import React, { useState } from "react";
import { logAction } from "./script"; // Import the logAction function
import "./style.css";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [logs, setLogs] = useState([]);  // New state for storing logs

    const addTask = () => {
        if (task.trim()) {
            const newTask = {
                id: Date.now(),
                text: task,
                completed: false,
                timestamp: new Date().toLocaleString(),  // Timestamp when task is added
            };
            setTasks([...tasks, newTask]);
            setLogs([...logs, { action: `Task added: "${task}"`, timestamp: newTask.timestamp }]);  // Log the action
            logAction(`Task added: "${task}"`, newTask.timestamp);
            setTask("");
        }
    };

    const deleteTask = (id) => {
        const taskToDelete = tasks.find((task) => task.id === id);
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        const deleteTimestamp = new Date().toLocaleString();  // Timestamp for deletion
        setLogs([...logs, { action: `Task deleted: "${taskToDelete.text}"`, timestamp: deleteTimestamp }]);  // Log the action
        logAction(`Task deleted: "${taskToDelete.text}"`, deleteTimestamp);
    };

    const toggleTask = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed, timestamp: new Date().toLocaleString() } : task
        );
        setTasks(updatedTasks);
        const completedTimestamp = new Date().toLocaleString();  // Timestamp for completion
        setLogs([...logs, { action: `Task "${updatedTasks.find(task => task.id === id).text}" marked as ${updatedTasks.find(task => task.id === id).completed ? 'completed' : 'incomplete'}`, timestamp: completedTimestamp }]);
        logAction(`Task "${updatedTasks.find(task => task.id === id).text}" marked as ${updatedTasks.find(task => task.id === id).completed ? 'completed' : 'incomplete'}`, completedTimestamp);
    };

    return (
        <div className="todo-container">
            <h2>To-Do List</h2>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? "completed" : ""}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        {task.text}
                        <span className="timestamp">({task.timestamp})</span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            {/* Log section */}
            <div className="log-container">
                <h3>Action Log</h3>
                <ul>
                    {logs.map((log, index) => (
                        <li key={index}>
                            <strong>{log.timestamp}:</strong> {log.action}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;
