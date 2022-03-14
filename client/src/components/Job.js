// import React functionality
import React from 'react'

// import the useNavigate hook 
import {useNavigate} from 'react-router-dom'

const Job = (props) => {
    // setting variable navigate in order to use useNavigate hook
    const navigate = useNavigate()

    // passing down in order to use as props  
    const {title, id, company, salary, deleteJob} = props

    return (
        <div className= 'border'>
        <h1>Job</h1>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>company: {company}</p>
        <p>salary: {salary}</p>

            
            <button className="button" onClick={()=> deleteJob(id)}>delete</button>
             {/* navigate hook gives the api route for edit in 1st argument and passes the state in 2nd argument in order to prepopulate content */}
            <button className="button" onClick={()=> navigate(`/jobs/${id}/edit`, {state: {title, id, company, salary}})}>edit</button>
             {/* navigate hook gives the api route for show in 1st argument and passes the state in 2nd argument in order to prepopulate content */}
            <button className="button" onClick={()=> navigate(`/jobs/${id}`, {state: {title, id, company, salary}})}>show</button>
            
        </div>
    )
}

export default Job