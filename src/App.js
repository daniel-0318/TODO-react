import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import React from 'react';


const defaultTodos = [
  {text:"Cortar cebolla", completed:false},
  {text:"Tomar el curso de intro a react.js", completed:true},
  {text:"Lorrar con la llorona", completed:false},
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      <TodoList>
        { defaultTodos.map(todo => (
          
          <TodoItem 
          key={todo.text } 
          text={todo.text}
          completed={todo.completed}
          />
          
        )
        
        )}
      </TodoList>

      <CreateTodoButton/>

      
    </React.Fragment>
  );
}


export default App;
