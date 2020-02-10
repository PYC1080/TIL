
import React, { Component } from 'react';
import TodoAppTemplate from './components/todoapptemplate.js';
import TodoAppForm from './components/todoappform.js';
import TodoAppList from './components/todoapplist.js';


class App extends Component {
  id = 3 

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: 'JSX 사용해보기', checked: true },
      { id: 2, text: '라이프 사이클 이해하기', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value 
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
  
    const selected = todos[index];
  
    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <TodoAppTemplate form={(
        <TodoAppForm 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoAppList todos={this.state.todos} onToggle={this.handleToggle} onRemove={this.handleRemove}/>
      </TodoAppTemplate>
    );
  }
}

export default App;