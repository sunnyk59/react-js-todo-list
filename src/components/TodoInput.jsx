import React, { useState } from 'react'

export default function TodoInput(props) {

    const { handleAddToDo } = props;

    const [toDoValue, setToDoValue] = useState("");

    
    return (
        <header>
            <input type="text" placeholder="Type your to do here..." value={toDoValue}
                onChange={
                    (e) => setToDoValue(e.target.value)
                }
            />

            <button onClick={
                () => handleAddToDo(toDoValue)
            }>Add</button>
        </header>
    )
}
