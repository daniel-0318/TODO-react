import React  from 'react';
import { useLocalStorage } from './useLocalStorage';
import {AppUI} from './AppUI';


// const defaultTodos = [
//   {text:"Cortar cebolla", completed:false},
//   {text:"Tomar el curso de intro a react.js", completed:true},
//   {text:"Lorrar con la llorona", completed:false},
//   {text:"usar estados derivados", completed:true},
// ]

// let tempDefault = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1', tempDefault);




function App() {

  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  //estas dos constantes son "estados derivados"
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;



  const searchTodos = todos.filter(
    (todo)=>{
      return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }
  );

  const completeTodo = (text) => {

    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(  
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }
  
  const deleteTodo = (text) => {

    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(  
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
  }

  return(
    <AppUI 
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchTodos = {searchTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    loading = {loading}
    error = {error}
    />
  )
  
}


export default App;
