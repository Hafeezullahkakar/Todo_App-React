import React from 'react';
import './App.css';
import {useContext} from 'react'
import SingleTodoList from '../components/SingleTodoList'
import {ListContext} from '../context/TodoListContext'

const TodoList = () => {
    const {todoList} = useContext(ListContext)
    return (
        <>
        {todoList.length>1 ? (
              <div className ='todo-list-box'>
              {todoList.map((list)=>{
                  return <SingleTodoList todoList={list} key={list.id} />
              })}
                          
          </div>
        ) : <div>List is Empty</div>}      
    </>
    );
};
export default TodoList;