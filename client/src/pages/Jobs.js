// import react, usestate, and use effect functionality 
import React, {useState, useEffect} from 'react'
// import use navigate functionality 
import {useNavigate} from 'react-router-dom'
// importing axios
import axios from 'axios'
// import Job page
import Job from '../components/Job'

//declare function called monsters
const Jobs = () => {
    const navigate = useNavigate()//navigate hook that is used for the navigate function
    const [jobs, setJobs] = useState([]) //this is the job state and the setter to set it 
    useEffect(()=>{ //have a useEffect so we can get the jobs on mount 
        console.log('mounted and doing api call to get jobs')
        getJobs() //calling the getJobs function 
    },[])

    const addJob = async (job)=>{ //sends an http post request to create a new job in the db
        try {
            let res = await axios.post("/api/jobs", job) //does axios call here; use async/await  
            setJobs([res.data, ...jobs]);  // setting the new monster(res.data) then using spread operator to pull all the other monsters
          } catch (err) {                   // and put them in the same array as the new monster 
            alert("error occured");         //error handling is great for debugging! 
          }
        }
    
   //declaring a function called 'deleteJob'
    const deleteJob = async (id) => { //it's asynchronous function that does axios call to the db
        await axios.delete(`/api/jobs/${id}`); //using the delete method to delete a job with a specific id from the specified path
        let filteredJobs = jobs.filter(job => job.id !== id) //declares variable called filteredJobs
        setJobs(filteredJobs) //filter is going through the monsters array, and looking at each monster in the array, and then
    }                           ////filtering out the id that matches and returning all the id's that do not match into a new array
    //setMonsters is setting our state with the new filteredMonster data

    const getJobs = async()=>{ //declaring a function that displays all the jobs
        try {
        let res = await axios.get('/api/jobs') //do an axios call here; 
        setJobs(res.data)                //set our state to res.data; which is all the monster data in the array
        }catch(err){
            alert('error in getJobs')
        }
    }

    const renderJobs = () => { //returning job state. map and go through each job and and return
                                //the job component that we just created and give it a key, job.id
        return jobs.map(job=> {
            // if any jobs are added or deleted, then it's passed into this 'deleteJobs' 
            //placeholder that is waiting for the data from the deleteJob function 
            return <Job key={job.id} {...job}deleteJob={deleteJob} addJob={addJob}/>
        })
    }

  
    return (
        <div>
            {/* //h1 header that diplays "Jobs" */}
            <h1>Jobs</h1>
            {/* creates a button, when button is clicked it uses navigate to get to the new page that has a form to create a new form*/}
            <button className="button" onClick={()=>navigate('/jobs/new')}>new</button>
            <div>
            {/* calls the renderJobs function */}
            {renderJobs()}
            </div>
            {/* diplays the monsters as JSON text */}
            <p>{JSON.stringify(jobs)}</p>
            </div>
    )
}

export default Jobs