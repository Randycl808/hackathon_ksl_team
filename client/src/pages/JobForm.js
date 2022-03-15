// import axios
import axios from 'axios'
// import the useContext and useState hooks from react
import React, { useContext, useState } from 'react'
// import the useParams, useLocation, and useNavigate from react router
import { useParams, useLocation, useNavigate } from 'react-router-dom'
// import the DataContext from the DataProvider
import { DataContext } from '../providers/DataProvider'

// setting a function called JobForm
const JobForm = () => {
    // trying to addJob from the DataProvider - currently isn't working since it's not in the DataProvider to pull from
    const {addJob} = useContext(DataContext)
    // setting the navigate/useNavigate hook
    const  navigate = useNavigate()
    // setting the location/useLocation hook
    const location = useLocation()
    // setting the useState for 'title' | pulling the state from the current location | if there is no title setting it to ''
    const [title, setTitle] = useState(location.state ? location.state.title : '')
    // setting the useState for param/useParams
    const params = useParams()

    // setting up the handleSubmit event
    const handleSubmit = async (e) => {
        // preventing the default event from happening
        e.preventDefault()
        // setting up a try catch, so if the try doesn't work, it will fall onto the catch error
        try {
            if (params.id) {
                // finding the job id that matches the params and updates it with an axios call to the /api/job/params.id and executing a put - THIS IS THE EDIT FORM
                await axios.put(`/api/jobs/${params.id}`, {
                    title,
                    id: params.id,
                })
            } else {
                // if there is no job id that matches the params, it will do an axios call to the /api/jobs and execute a post to create a new job - THIS IS THE NEW FORM
                let res = await axios.post(`/api/jobs`, {title})
                console.log('res.data:', res.data)
                addJob(res.data)
            }
            // once the put or the post is complete, the user will be navigated back to the 'jobs' page
            navigate('/jobs')
        } catch (err) {
            // alerts if there is an error
            alert('err')
        }
    }


    return (
        <div className= 'border'>
            {/* header for 'Edit' and 'New' Job Form based on the params id */}
            <h1>{params.id ? 'Edit' : 'New'} Job Form</h1>
            {/* telling the handleSubmit to run when the form is submitted */}
            <form onSubmit={handleSubmit}>
                {/* Label for form input */}
                <p>Job Title</p>
                {/* input field for title key, saying that with the onChange even it will set the Title to whatever input the user has entered */}
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                {/* button for submit that will say update or create based on if this is the edit form or the new form */}
                <button className="button">{params.id ? 'Update' : 'Create'}</button>    
            </form>
            {/* Shows the id, if there is no id it says 'no id' */}
            <p>id: {params.id ? params.id : 'no id'}</p>
            {/* displays the data for the specific job is as text */}
            <p>{JSON.stringify(location.state)}</p>
        </div>
    )
}

export default JobForm