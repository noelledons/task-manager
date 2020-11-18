import React from 'react'; //shortcut rafce
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskListContextProvider from '../context/TaskListContext';
import '../App.css';
import Header from "./Header";

const App = () => {
    return (
        <TaskListContextProvider>
        <div className = "container">
            <div className = "app-wrapper">
                <Header />
               <div className = "main">
                <TaskForm />
               <TaskList />
               </div> 
            </div>
        </div>
        </TaskListContextProvider>
    );
};

export default App;
