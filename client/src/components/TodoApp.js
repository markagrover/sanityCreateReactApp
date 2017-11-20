import React, { Component } from "react";
import Title from "./Title";
import Button from "./Button";
import Input from "./Input";
import Todos from "./Todos";
import { connect } from "react-redux";
import * as actions from "../actions";
import sanity from "../lib/sanity";


class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  async componentDidMount() {
    await this.props.fetchTodos(null);
    if(!this.state.newTodo){
        this.setState({
            newTodo: ''
        });
    }
      this.setState({
          newTodo: ''
      });

   // console.log('this.props.todos',this.props.todos);

  }
 async updateNewTodoInput(e) {
    await this.setState({
      newTodo: e.target.value
    });
    console.log(this.state);
  }
 async deleteTodo(id) {

      try {
          console.log(id);
          const res = await sanity.delete(id);
          console.log(res,'todo deleted');

      } catch (err) {
          console.error('Delete failed: ',err);
      }
     this.props.fetchTodos(null);
  }
 async createTodo(e) {
      console.log('this.state.newTodo',this.state.newTodo);
      const doc = {
          _type: 'todo',
          task: this.state.newTodo
      };
      const res = await sanity.create(doc);
      console.log(res._id);
  }
  updateTodo(id) {
     sanity
         .patch(id) // Document ID to patch
         .set({task: this.state.newTodo}) // Shallow merge
         .commit() // Perform the patch and return a promise
         .then(updatedTodo => {
             console.log('Hurray, the todo is updated! New document:')
             console.log(updatedTodo)
         })
         .catch(err => {
             console.error('Oh no, the update failed: ', err.message)
         });

      this.props.fetchTodos(null);
  }
  markComplete(id, completed) {
      if(!completed){
          sanity
              .patch(id) // Document ID to patch
              .set({completed: true}) // Shallow merge
              .commit() // Perform the patch and return a promise
              .then(updatedTodo => {
                  console.log('Hurray, the todo is updated! New document:')
                  console.log(updatedTodo)
                  this.props.fetchTodos(null);
              })
              .catch(err => {
                  console.error('Oh no, the update failed: ', err.message)
              });
      } else {
          sanity
              .patch(id) // Document ID to patch
              .set({completed: false}) // Shallow merge
              .commit() // Perform the patch and return a promise
              .then(updatedTodo => {
                  console.log('Hurray, the todo is updated! New document:')
                  console.log(updatedTodo)
                  this.props.fetchTodos(null);
              })
              .catch(err => {
                  console.error('Oh no, the update failed: ', err.message)
              });
      }


  }
   async addNewTodo() {
    // create todo
      const doc = {
          _type: 'todo',
          task: this.state.newTodo
      };
       const res = await sanity.create(doc);
       console.log(res._id);

     this.props.fetchTodos(null);
     this.setState({
         newTodo: ''
     })
    // dispatch action to do this...
  }
  render() {
      console.log('this.props.todos',this.props.todos);
    return (
      <div>
        <Title>Add Some TODOs</Title>

        <hr />
        <div>
          <Input
           inputValue={this.state.newTodo} onUpdateState={this.updateNewTodoInput.bind(this)}
          />
          <Button handleClick={this.addNewTodo.bind(this)}>Add Todo</Button>
        </div>
        <hr />
        <Todos todoActions={{
            deleteTodo: this.deleteTodo.bind(this),
            toggleCompleted: this.markComplete.bind(this)
        }} todos={this.props.todos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, actions)(TodoApp);
