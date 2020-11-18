import React, {createContext, useState, useEffect} from 'react';
import {v4 as uuidv4} from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = props => { 
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []
    
    const [tasks, setTasks] = useState (initialState);
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    // Edit Item
    const [editItem, setEditItem] = useState(null);
    
    //Add Tasks
    const addTask = (title) => {
        setTasks([...tasks, {title,id:uuidv4()}])
    };

    //Remove Tasks
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    };

    //Clear Tasks
    const clearList = () => {
    setTasks([])
    };

    //Find Item
    const findItem = id => {
       const item = tasks.find(task => task.id === id);
        setEditItem(item);
    };

    //Edit Item
    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? {title,id} : task));
    setTasks(newTasks);
    setEditItem(null);
    };
   
    return (
        <TaskListContext.Provider value = {{tasks, addTask, removeTask, clearList, findItem, editTask, editItem}}>
        {props.children} 
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;
