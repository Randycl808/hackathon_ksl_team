import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Job from '../components/Job'


const Jobs = () => {
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        console.log('mounted and doing api call to get monsters')
        getJobs()
    },[])

    const addJob = async (job)=>{
        try {
            let res = await axios.post("/api/monsters", job)
            setJobs([res.data, ...jobs]);
          } catch (err) {
            alert("error occured");
          }
        }
    
   
    const deleteJob = async (id) => {
        await axios.delete(`/api/monsters/${id}`);
        let filteredJobs = jobs.filter(job => job.id !== id)
        setJobs(filteredJobs)
    }

    const getJobs = async()=>{
        try {
        let res = await axios.get('/api/monsters')
        setJobs(res.data)
        }catch(err){
            alert('error in getJobs')
        }
    }

    const renderJobs = () => {
        return jobs.map(job=> {
            return <Job key={job.id} {...job}deleteJob={deleteJob} addJob={addJob}/>
        })
    }

  
    return (
        <div>
            <h1>Jobs</h1>
            <button onClick={()=>navigate('/jobs/new')}>new</button>
            <div>
            {renderJobs()}
            </div>
            <p>{JSON.stringify(jobs)}</p>
            </div>
    )
}

export default Jobs