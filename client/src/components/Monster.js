// import React functionality
import React from 'react'

// import the useNavigate hook 
import {useNavigate, } from 'react-router-dom'

const Monster = (props) => {
    // setting variable navigate in order to use useNavigate hook
    const navigate = useNavigate()
    const {name, id, deleteMonster} = props

    return (
        <div className= 'border'>
        <h1>Monster</h1>
        <p>id: {id}</p>
        <p>name: {name}</p>
            
            <button className="button" onClick={()=> deleteMonster(id)}>delete</button>
             {/* navigate hook gives the api route for edit in 1st argument and passes the state in 2nd argument in order to prepopulate content */}
            <button className="button" onClick={()=> navigate(`/monsters/${id}/edit`, {state: {name, id}})}>edit</button>
             {/* navigate hook gives the api route for show in 1st argument and passes the state in 2nd argument in order to prepopulate content */}
            <button className="button" onClick={()=> navigate(`/monsters/${id}`, {state: {name, id}})}>show</button>
            
        </div>
    )
}

export default Monster