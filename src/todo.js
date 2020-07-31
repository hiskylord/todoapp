import React from 'react'

export default function Todo({ datas, handleDelete }) {
    return (
        datas.map(todo => {

            return <
                tr key = { todo.id } > < td > { todo.title } < /td><td>{todo.date}</td > < td > < button type = 'button'
            className = 'CTodo'
            data = { todo.id } > Complete < /button><button type='button' className='DTodo' data={todo.id} onClick={handleDelete}>Delete</button > < /td> < /tr >
        }))
}