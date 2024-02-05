import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { TodoForm } from "../TodoForm";

function AppUI() {

  const { 
    searchTodos, 
    completeTodo, 
    deleteTodo, 
    loading, 
    error, 
    openModal,
    setOpenModal, 
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>

      <TodoCounter />
      <TodoSearch />


      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchTodos.length === 0) && <EmptyTodos />}

        {searchTodos.map(todo => (

          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />

        )

        )}
      </TodoList>


      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}


    </React.Fragment>
  );
}

export { AppUI };