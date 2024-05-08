import React from 'react'

export default function TodoCard(props) {
  const { children, handleRemoveToDo, handleUpdateToDo, index } = props

  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>

        <button onClick={() => handleUpdateToDo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button onClick={() => handleRemoveToDo(index)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>

      </div>
    </li>
  )
}
