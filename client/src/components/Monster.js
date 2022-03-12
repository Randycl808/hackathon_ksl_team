import React from 'react'
import {useNavigate, } from 'react-router-dom'

const Monster = (props) => {
    const navigate = useNavigate()
    const {name, id, deleteMonster} = props

    return (
        <div className= 'border'>
        <h1>Monster</h1>
        <p>id: {id}</p>
        <p>name: {name}</p>
            
            <button className="button" onClick={()=> deleteMonster(id)}>delete</button>
            <button className="button" onClick={()=> navigate(`/monsters/${id}/edit`, {state: {name, id}})}>edit</button>
            <button className="button" onClick={()=> navigate(`/monsters/${id}`, {state: {name, id}})}>show</button>
            
        </div>
    )
}

export default Monster