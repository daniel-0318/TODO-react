import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import React  from 'react';


// const defaultTodos = [
//   {text:"Cortar cebolla", completed:false},
//   {text:"Tomar el curso de intro a react.js", completed:true},
//   {text:"Lorrar con la llorona", completed:false},
//   {text:"usar estados derivados", completed:true},
// ]

// let tempDefault = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1', tempDefault);

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  //estas dos constantes son "estados derivados"
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchTodos = todos.filter(
    (todo)=>{
      return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }
  );

  const saveTodos = (newTodos) => {

    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));

    setTodos(newTodos);
  };

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

  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      
      <TodoList>
        { searchTodos.map(todo => (
          
          <TodoItem 
          key={todo.text } 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
          
        )
        
        )}
      </TodoList>

      <CreateTodoButton/>

      
    </React.Fragment>
  );
}


export default App;
