import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

  //State management variable
  const [toDo, setToDo] = useState([]);
  const [toDoValue, setToDoValue] = useState('');

  //Two Params: useEffect(Function, Dependency Array)
  /**
   * Here, JSON.parse() takes the stringified JSON data 
   * {"toDo":["Task 1","Task 2","Task 3"]} and converts 
   * it back into the original JavaScript object { toDo: ["Task 1", "Task 2", "Task 3"] }.
   */
  useEffect(() => {
    if (!localStorage){
      return;
    } 

    let storedToDos = localStorage.getItem("toDo");
    if (!storedToDos){
      return;
    }
      
    storedToDos = JSON.parse(storedToDos).toDo;
    setToDo(storedToDos);

  }, []) // if you want to run it on page load so leave it dependency empty 

  function persistData(newList) {
    localStorage.setItem('toDo', JSON.stringify({ toDo: newList }));
  }

  function handleAddToDo(newTodo) {
    const newToDoList = [...toDo, newTodo]
    persistData(newToDoList)
    setToDo(newToDoList)
  }

  function handleRemoveToDo(index) {
    const newToDoList = toDo.filter((_, i) => i !== index)
    persistData(newToDoList)
    setToDo(newToDoList) 
  }

  function handleUpdateToDo(index) {
    handleRemoveToDo(index)
    setToDoValue(toDo[index])
  }

  return (
    // State management for toDo's will be done using useState()
    <>
      <TodoInput toDoValue={toDoValue} setToDoValue={setToDoValue} handleAddToDo={handleAddToDo} />
      <TodoList toDos={toDo} handleRemoveToDo={handleRemoveToDo} handleUpdateToDo={handleUpdateToDo} />
    </>
  )
}

export default App
