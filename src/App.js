import React, { useState, useReducer, useEffect } from 'react'
import uuidv4 from 'uuid/v4'
import Header from './header'
import Todo from './todo'
import './App.css';
const ACTION = { ADD: 'add', DELETE: 'delete', RETRIVE: 'retrive' }

function reduce(database, payload) {
    return payload.data
}
export default function App() {
    let database = []
    useEffect(() => {
        dispatch({
            data: JSON.parse(localStorage.getItem('local_data')),
            action: ACTION.RETRIVE
        })

    }, [])

    // const [state, setTodo] = useState(database)
    const [state, dispatch] = useReducer(reduce, database)

    useEffect(() => { localStorage.setItem('local_data', JSON.stringify(state)) }, [state])
        // function addtodo(e) {
        //     e.preventDefault()
        //     const title = e.target.title.value
        //     const date = e.target.schedule.value
        //     const newdata = { id: uuidv4(), title, date }
        //     setTodo([...state, newdata])
        // }
    function handleTodo(e) {
        e.preventDefault()
        const title = e.target.title.value
        const date = e.target.schedule.value
        const newdata = { id: uuidv4(), title, date }
        dispatch({ data: [...state, newdata], action: ACTION.ADD })
    }

    function handleDelete(e) {
        const key = e.target.getAttribute('data')
        const newdata = state.filter((todo => todo.id !== key))
        dispatch({ data: newdata, action: ACTION.DELETE })
    }
    return ( < >
        <
        Header / >
        <
        table > < tr > < th > Activity < /th><th>Schedule</th > < th > Action < /th></tr > <
        Todo datas = { state }
        handleDelete = { handleDelete }
        /></table >
        <
        div > < form method = 'post'
        onSubmit = { handleTodo } > < input name = 'title'
        required / > < input name = 'schedule'
        type = 'date'
        required / > < button type = 'submit' > Add < /button></form > < /div> <
        p > { state.length }
        activities left < /p></ >
    )
}