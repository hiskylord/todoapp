import React from 'react'

export default function Todo({ datas, handleDelete }) {
    return (
        datas.map(todo => {

            return <
                tr key = { todo.id } > < td > { todo.title } < /td><td>{todo.date}</td > < td > < button type = 'button'
            data = { todo.id }
            onClick = { handleDelete }
            className = 'DTodo btn btn-warning rounded-pilled' > Complete < /button > < /td > < /tr >
        }))
}