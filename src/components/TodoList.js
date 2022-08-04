import React from "react"; 

export const TodoList = ({ todos,checkTodo }) => {
    return(
        <ul>
            {todos.map(todo=>{
                return <li key={todo.id} onClick={()=>{
                        checkTodo(todo.id);
                    }}style={{

                    textDecoration: todo.isChecked ? 
                    "underline" : "none"
                }}>{todo.value}</li>
            })}

        </ul>

    )



};