import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

    const { toDos } = props

    return (
        <ul className='main'>
            {
                toDos.map((todo, todoIndex) => {
                    return <TodoCard key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                })
            }
        </ul>
    )
}


