import React,{createContext, useState} from 'react';
import '../components/App.css';
import { v4 as uuidv4 } from 'uuid';

export const ListContext = createContext();
const TodoListContext = (props) => {
    const[todoList, setTodoList] = useState([
        {title:'', id: 0}
        ])

    const addTodoList=(list)=>{
        setTodoList( [...todoList,  {  title:list,  id:uuidv4()   }])
    }
    const removeTodoList = id =>{
        setTodoList(todoList.filter(list => list.id !== id))
    }

    const clearList = ()=>{
        setTodoList([])
    }
    return (
        <ListContext.Provider value ={{todoList , clearList, addTodoList, removeTodoList}}>
            {props.children}
        </ListContext.Provider>
    );
};

export default TodoListContext;