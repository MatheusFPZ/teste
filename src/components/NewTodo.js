import React, { useState } from "react";

export const NewTodo = ({setTodos}) =>{

const [value,setValue]= useState("");


    const onSubmit = (e) => {
    e.preventDefault();
    setTodos(prev=> {
        return [...prev, value, {
            id:prev.length,
            value, 
            isChecked: false,
        }];

    });
    setValue("");
    console.log(e);
   

}


return (
    <form onSubmit={onSubmit}>
            <input type="text" placeholder="Nova tarefa" value ={value} onChange={(e)=> {
                setValue(e.target.value);
            }
            
            
            } />
            <button type = "submit" >Adicionar</button>
    </form>

)


}