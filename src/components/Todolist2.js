import React, { useState } from 'react';
import Todotable from './Todotable';


function Todolist2() {

    const addTodo = (e) => {
        const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
        const [todos, setTodos] = useState([]);

        const inputChanged = (event) => {
            setTodo({ ...todo, [event.target.name]: event.target.value });
        }

        const addTodo = (event) => {
            event.preventDefault();
            setTodos([...todos, todo]);
        }
    }
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description} />
                <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date} />
                <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority} />

                <input type="submit" value="Add" />
            </form>
            <table><tbody>{todos.map(todo => <tr><td>{todo.description}</td><td>{todo.date}</td><td>{todo.priority}</td></tr>)}</tbody></table>
        </div>
    );
}

export default Todolist2;