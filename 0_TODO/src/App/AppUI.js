import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import React  from 'react';
import { TodoContext } from '../TodoContext';

function AppUI(){
  return (
    <React.Fragment>
  
      <TodoCounter />
      <TodoSearch />
      
      <TodoContext.Consumer>
        {({searchTodos,completeTodo,deleteTodo,loading,error})=>(
          <TodoList>
          {loading && <TodosLoading/> }
          {error && <TodosError/> }
          {(!loading && searchTodos.length === 0) && <EmptyTodos/> }

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
        )}
      </TodoContext.Consumer>
  
      <CreateTodoButton/>
  
      
    </React.Fragment>
  );
}

export {AppUI};