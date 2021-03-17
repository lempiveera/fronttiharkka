import React, { useState } from 'react';

function TodolistDelete() {
    const [task, setTask] = useState({desc:'', date:''});
    const [todos, setTodos] = useState([]);

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, task]);
        //takes the whole old taulukko, in the end the it addds desc. can do the other way around
    }

    const inputChanged = (e) =>{
        setTask({...task, [e.target.name]: e.target.value});
    }

    const deleteTask = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    }
    
  
    return (
        <div className="App">
            <h1>Todolist</h1>
            <form onSubmit={addTodo}>
                <label for="date">Date: </label>
                <input type="date" name="date" value={task.date} onChange={inputChanged}/>
                <label for="desc">Description: </label>
                <input type="name" name="desc" value={task.desc} onChange={inputChanged}/>
                <input type="submit" value="Add"/>
            </form>
            <br></br>   
            <table>
                <tbody><tr><th>Date</th><th>Description</th></tr>
                    {
                        todos.map((task, index) =>
                            <tr key={index}>
                                <td>{task.date}</td>
                                <td>{task.desc}</td>
                                <button type="button" onClick={() => deleteTask(index)}>Delete</button>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TodolistDelete;