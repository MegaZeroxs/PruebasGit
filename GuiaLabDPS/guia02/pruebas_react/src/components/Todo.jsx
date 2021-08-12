import React from 'react';
const Todo = ({ todo, index, deleteTodo, cantidad}) => {
    return (
        <>
            <li className="list">
                <h3>{cantidad} - {todo}</h3> <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
            </li>
        </>
    );
}
export default Todo;