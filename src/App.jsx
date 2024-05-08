import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
 
  //State management variable
  const [toDo, setToDo] = useState(["Learn NextJS", "Walk in the Park", "Go to gym"])

  function handleAddToDo (todo) {
    setToDo([...toDo, todo])
  }

  return (
    // State management for toDo's will be done using useState()
    <> 
      <TodoInput handleAddToDo={handleAddToDo} />   
      <TodoList toDos={toDo} />
    </>
  )
}

export default App
