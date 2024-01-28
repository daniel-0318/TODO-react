import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import React  from 'react';

function AppUI({ completedTodos,totalTodos,searchValue,setSearchValue,searchTodos,completeTodo,deleteTodo }){
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

export {AppUI};