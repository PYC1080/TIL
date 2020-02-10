import React, { Component } from 'react';
import TodoAppItem from './todoappitem.js';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
            <TodoAppItem
            id={id}
            text={text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}
            />
        )
    );

    return (
        <div>
            {todoList}    
        </div>
        );
    }
}

export default TodoItemList;