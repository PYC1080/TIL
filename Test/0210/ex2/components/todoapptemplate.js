import React from 'react';
import './todoappcss.css';

const TodoAppTemplate = ({form, children}) => {
    return (
        <main className="todo-app-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    );
};

export default TodoAppTemplate;