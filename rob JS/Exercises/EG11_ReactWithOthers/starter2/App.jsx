import React from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default class App extends React.Component {

  render() {

    const todos = [
      {id: 0, text: "Dummy todo"}
    ]

    return (
      <div>
        <AddTodo onAddClick={() => {return null}}/>
        <TodoList todos={todos} />
      </div>
    )
  }
}
