
import React from 'react';
import './todoappformcss.css';

const TodoAppForm = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="todoform">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default TodoAppForm;