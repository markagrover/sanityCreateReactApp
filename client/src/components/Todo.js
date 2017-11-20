import React from 'react';
import Button from './Button';

const Todo = (props) => {
 return (
   <div>
       <h2>{props.todo.task}</h2>
       <p>{props.todo.description}</p>
       <p data-id={props.todo._id} onClick={props.handleClick}>{props.todo.completed ? "Completed" : "UnCompleted!"}</p>
       <Button handleClick={null}>Edit</Button>
       <Button handleClick={props.todoActions.deleteTodo.bind(null,props.todo._id)}>Delete</Button>
       <Button handleClick={props.todoActions.toggleCompleted.bind(null,props.todo._id, props.todo.completed)}>{props.todo.completed ? "Uncomplete" : "Complete"}</Button>
   </div>
 );

};

export default Todo;
