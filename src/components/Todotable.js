import React from 'react';


function Todotable(props) {
    return (
        <div>
            <table>
                <tbody>
                    {
                        props.todos.map((task, index) =>
                            <tr key={index}>
                                <td>{task.date}</td>
                                <td>{task.desc}</td>
                                <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Todotable;