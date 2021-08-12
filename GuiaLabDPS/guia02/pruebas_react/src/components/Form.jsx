import React, {useState} from 'react';
import Todo from './Todo';
const Form = () => {

    const [todo, setTodo] = useState({});

    const [todos, setTodos] = useState([
        {todo: 'Manzanas', cantidad: 5}
    ]);

    const handleChange = e => setTodo({...todo, [e.target.name]: e.target.value});
    const handleClick = e => {
        if(Object.keys(todo).lenght === 0 || todo.todo.trim() === ''){
            alert("El campo no puede estar vacio");
            return;
        }
        setTodos([...todos, todo]);
    };
    const deleteTodo = indice => {
        const newTodos = [...todos];
        newTodos.splice(indice, 1);
        setTodos(newTodos);
    }
    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label><br />
                <input type="text" name="todo" id="" onChange={handleChange}/>
                <input type="text" name="cantidad" id="" onChange={handleChange}/>
                <button onClick={handleClick}>Agregar</button>
            </form>
            {
                todos.map((value, index) => (<Todo todo={value.todo} key={index} deleteTodo={deleteTodo} cantidad={value.cantidad} />))
            }
        </>
    );
}

export default Form;