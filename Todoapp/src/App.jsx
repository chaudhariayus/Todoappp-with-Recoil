import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { todolist,filtersearch } from './atom'

function App() {

  return (
    <>
    <RecoilRoot>
      <Input/>
    </RecoilRoot>
    </>
  )
}

function Input(){
  const [title,setTitle]=useState("");
  const [description,setdescription]=useState("");
  const settodolist=useSetRecoilState(todolist);
  const Addtodo=useCallback(()=>{
    settodolist((oldtodos)=>
      [...oldtodos,{
        id:Math.random(),
        title:title,
        description:description
      }]
    );
    setTitle("");
    setdescription("");
  },[title,description]);
  return (
  <div>
    <center>
    <input placeholder='title' value={title}onChange={(e)=>{setTitle(e.target.value)}}></input><br/>
    <input placeholder='description' value={description} onChange={(e)=>{setdescription(e.target.value)}}></input><br/>
    <button onClick={Addtodo}>Submit</button><br/>
    <Filter></Filter>
    </center>
  </div>);
}
function Filter(){
  const [filter,setFilter]=useState("");
  const todos=useRecoilValue(filtersearch(filter));
  return (<div>
    <input value={filter} placeholder="filter search" onChange={(e)=>{setFilter(e.target.value)}}></input><br/>
    {todos.map((todo)=>{
      return <Todo id={todo.id} title={todo.title} description={todo.description}/>
    })}
  </div>)
}

function Todo({title,description}){
  return (<div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>)
}
export default App
