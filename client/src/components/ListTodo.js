import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {

    const [Todos, setTodos] = useState([]);

    //get Todos
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const data = await response.json();
            console.log(data)
            setTodos(data)
        } catch (error) {
            console.error(error)
        }
    }


    //delete Todo
    const deletTodo = async (td_id) => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${td_id}`, {
                method : "DELETE",
                headers : {"Content-Type" : "application/json"}
            });
            console.log(response);
            setTodos(Todos.filter(todo => todo.td_id !== td_id))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTodos();
    },[])

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Todos.map(todo => (
                        <tr key={todo.td_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo} /></td>
                            <td><button className="btn btn-danger" onClick={() => deletTodo(todo.td_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </Fragment>
    )
}

export default ListTodos;