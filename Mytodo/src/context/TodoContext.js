import React from "react";

const TodoContext = React.createContext({
    todos:[
        {
            id:1,
            todo:"This is todo",
            complete:false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{},
})

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () =>{
    return React.useContext(TodoContext);
}