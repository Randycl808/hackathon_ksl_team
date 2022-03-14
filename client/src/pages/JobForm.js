import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'


const JobForm = () => {
    const {addJob} = useContext(DataContext)
    const  navigate = useNavigate()
    const location = useLocation()
    const [title, setTitle] = useState(location.state ? location.state.title : '')
    const params = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (params.id) {
                await axios.put(`/api/jobs/${params.id}`, {
                    title,
                    id: params.id,
                })
            } else {
                let res = await axios.post(`/api/jobs`, {title})
                console.log('res.data:', res.data)
                addJob(res.data)
            }
            navigate('/jobs')
        } catch (err) {
            alert('err')
        }
    }


    return (
        <div className= 'border'>
            <h1>{params.id ? 'Edit' : 'New'} Job Form</h1>
            <form onSubmit={handleSubmit}>
                <p>Job Title</p>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <button className="button">{params.id ? 'Update' : 'Create'}</button>    
            </form>
            <p>id: {params.id ? params.id : 'no id'}</p>
            <p>{JSON.stringify(location.state)}</p>
        </div>
    )
}

export default JobForm