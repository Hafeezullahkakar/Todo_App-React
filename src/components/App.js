import './App.css';
import TodoList from '../components/TodoList'
import TodoListContext from '../context/TodoListContext'
import TodolistForm from '../components/TodolistForm'
function App() {
  return (
    <div className ='App'>
    <TodoListContext>
      <h3>Todo List</h3>
      <TodolistForm />
      <TodoList/> 
    </TodoListContext>
    </div>
  );
}

export default App;
