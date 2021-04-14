import React,{useContext, useState} from 'react';
import '../components/App.css'
import {ListContext} from '../context/TodoListContext'
const TodolistForm = () => {
    const {addTodoList} =  useContext(ListContext)
    const {clearList} = useContext(ListContext)
    const [title, setTitle] =useState("")
    const handleChange=e=>{
        setTitle(e.target.value)
    }
    const handleSubmit =  e =>{
        e.preventDefault();
        addTodoList(title)
        setTitle("")
    }
    return (
        <form onSubmit ={handleSubmit} className = 'form'>
            <input type='text' onChange = {handleChange} />
            <div className = 'form-buttons'>
            <button className ='add'  type = "submit">Add Task</button>
            <button onClick = {clearList} className = 'clear'>Clear</button>
            </div>
        </form>
    );
};

export default TodolistForm;