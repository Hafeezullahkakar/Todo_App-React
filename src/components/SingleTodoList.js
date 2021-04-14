import React,{useContext} from 'react';
import './App.css';
import {ListContext}  from '../context/TodoListContext'
const SingleTodoList = ({todoList}) => {
    const {removeTodoList} = useContext(ListContext)   
       
    return (
        <>
        <li className='single-todolist'>
            <span>{todoList.title}</span>
                <div className = 'btns'>
                <button onClick = {()=>removeTodoList(todoList.id)} className = 'dlt-btn  task-btn'><i className='fas fa-trash-alt'></i></button>
                <button  className = 'edit-btn  task-btn'><i className='fas fa-pen'></i></button>
            </div>
        </li>   
        </>
       
    );
};

export default SingleTodoList;