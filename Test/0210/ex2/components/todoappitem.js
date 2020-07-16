import React, { Component } from 'react';
import './todoappitem.css';

class TodoAppItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <div className="todo-app-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                e.stopPropagation();
                onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
                </div>
                {
                checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoAppItem;