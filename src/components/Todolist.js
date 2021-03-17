import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Todolist = () => {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);

  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0)
      setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
    else
      alert('Choose a row to delete')
  }

  const columns = [
    { headerName: "Description", field: "description", sortable: true, filter: true, floatingFilter: true },
    { headerName: "Date", field: "date", sortable: true, filter: true, floatingFilter: true },
    {
      headerName: "Priority", field: "priority", sortable: true, filter: true, floatingFilter: true,
      cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
    }

  ];

  return (
    <div>

      <TextField label="Description" onChange={inputChanged}  name="description" value={todo.description} />
      <TextField label="Date"onChange={inputChanged}  name="date" value={todo.date} />
      <TextField label="Priority"onChange={inputChanged}  name="priority" value={todo.priority} />
      <Button variant="contained" color="primary" onClick={addTodo}>Add</Button>
      <Button variant="contained" color="primary" onClick={deleteTodo}>Delete</Button>
      <div className="ag-theme-material" style={{ width: '45%', height: '700px', margin: 'auto' }}>
        <AgGridReact
          rowData={todos}
          columnDefs={columns}
          rowSelection="single"
          ref={gridRef}
          onGridReady={params => gridRef.current = params.api}
          animateRows="true" />
      </div>

    </div>
  );
};

export default Todolist;