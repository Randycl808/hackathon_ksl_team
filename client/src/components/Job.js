import React from 'react'
import {useNavigate} from 'react-router-dom'

const Job = (props) => {
    const navigate = useNavigate()
    const {title, id, company, salary, deleteJob} = props

    return (
        <div className= 'border'>
        <h1>Job</h1>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>company: {company}</p>
        <p>salary: {salary}</p>

            
            <button onClick={()=> deleteJob(id)}>delete</button>
            <button onClick={()=> navigate(`jobs/${id}/edit`, {state: {title, id, company, salary}})}>edit</button>
            <button onClick={()=> navigate(`jobs/${id}/show`, {state: {title, id, company, salary}})}>show</button>
            
        </div>
    )
}

export default Job