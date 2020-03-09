import React, {Component} from 'react';

class TodoList extends Component {
  constructor(){
    super();
    this.state ={
      todos: [],
      currentToDo: "",
    }
  };

handleChange = event => {
  console.log(event.target.value);
}

addTask = event => {
  event.preventDefault();
  console.log("The add task method was executed", event)
};


  render(){
    return(
      <div className='container'>
        <form onSubmit={this.addTask}>
          <label htmlFor="taskName">Task Name:</label>
          <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add todo here" />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  };
};

export default TodoList;
