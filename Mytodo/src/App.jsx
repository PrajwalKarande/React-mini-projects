import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context/TodoContext'
import Todoform from './components/Todoform'
import Todolist from './components/Todolist'


function App() {
  
  const [todos,setTodos]  = useState([])//holds all todos

  const addTodo = (todo) =>{
      setTodos((prevTodos)=>[{id:Math.random(),...todo},...prevTodos])
  }

  const updateTodo = (id,todo) =>{
    setTodos((prevTodos)=>prevTodos.map((currTodo)=>currTodo.id===id? todo : currTodo))
    //property name todo same as parameter todo thus after ? can use todo direclty means instead currTodo.todo=todo we can write todo else keep object as it is.
  }

  const deleteTodo = (id) =>{
    setTodos((prevTodos)=>prevTodos.filter((currTodo)=>currTodo.id!==id))
  }

  const toggleComplete = (id)=>{
    setTodos((prevTodos)=>prevTodos.map((currTodo)=>currTodo.id===id?{...currTodo,complete:!currTodo.complete}:currTodo))
  }

  //retrive todos frm localstorage

  //retrieve data
  useEffect(()=>{
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if(localTodos && localTodos.length>0){
      setTodos(localTodos);
    }
  },[]) 

  //save data to storage
  useEffect(()=>{ 
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
   

  return (
    <>
      <TodoContextProvider value={{addTodo,updateTodo,deleteTodo,toggleComplete}}>
        <div className="bg-black min-h-screen py-8">
                        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-yellow-400">
                            <h1 className="text-2xl font-bold text-center mb-8 mt-2">TODO List</h1>
                            <div className="mb-4">
                                {/* Todo form goes here */}
                                <Todoform/>
                                
                            </div>
                            <div className="flex flex-wrap gap-y-3">
                                {/*Loop and Add TodoItem here */}
                                {
                                  todos.map((todo)=>(
                                    <div key={todo.id}
                                      className='w-full'
                                    >
                                      <Todolist todo={todo}/>
                                    </div>
                                  ))
                                }
                            </div>
                        </div>
                    </div>
      </TodoContextProvider>
    </>
  )
}

export default App

