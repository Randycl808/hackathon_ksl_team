import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Job from '../components/Job'
import JobForm from '../pages/JobForm'


const JobShow = () => {
    //state for the data
    const [jobs, setJobs] = useState ([])
    //gets the data on load
    useEffect(()=>{
        getJobs()
    },[])
    const addJob = async (job)=>{
        //adds job to DATABASE
        let res = await axios.post(`/api/jobs/${params.id}`)
        //updating STATE (jobs)
        setJobs([...jobs, res.data])
    }

    const updateJob = async (job)=>{
        //updates job to DATABASE
        let res = await axios.put(`/api/job/${params.id}/jobs/${job.id}`)
        //UI portion of update
        const updateJobs = jobs.map(i => i.id === res.data.id ? res.data : i)
        console.log('res.data:', res.data)
        console.log(updateJobs)
        setJobs(updateJobs)
    }
    //hook up button and pass correct data
    //uses a axios call 
    //UI

    const deleteJob = async(id)=>{
        //delete from DATABASE
        let res = await axios.delete(`/api/jobs/${params.id}`)
        //delete from UI
        setJobs(jobs.filter(i=> i.id !== id))
    }
    //gets jobs from DATABASE
    const getJobs = async () => {
        //api call
        let res = await axios.get(`/api/jobs/${params.id}`)
        //store the data from axios in state (useSTATE)
        setJobs(res.data)
    }

    //TODO: render
    const renderJobs =()=>{
        return jobs.map(job => <Job deleteJob={deleteJob} key={job.id} {...job} updateJob={updateJob}/>)
    }
    const params = useParams()
    const location = useLocation()

    return (
        <div>
            <h1>JobShow</h1>
            <h1> Job: {location.state.title}</h1>
            <p>ID: {params.id}</p>
            <JobForm addJob={addJob} />
            <hr />
            {renderJobs()}
            <hr />
            <p>{JSON.stringify(jobs)}</p>
        </div>
    )
}

export default JobShow