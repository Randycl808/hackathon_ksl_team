import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'

const MonsterForm = () => {
    const {addMonster} = useContext(DataContext)
    const  navigate = useNavigate()
    const location = useLocation()
    const [name, setName] = useState(location.state ? location.state.name : '')
    const params = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (params.id) {
                await axios.put(`/api/monsters/${params.id}`, {
                    name,
                    id: params.id,
                })
            } else {
                let res = await axios.post(`/api/monsters`, {name})
                console.log('res.data:', res.data)
                addMonster(res.data)
            }
            navigate('/monsters')
        } catch (err) {
            alert('err')
        }
    }


    return (
        <div className= 'border'>
            <h1>{params.id ? 'Edit' : 'New'} Monster Form</h1>
            <form onSubmit={handleSubmit}>
                <p>Monster Name</p>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button>{params.id ? 'Update' : 'Create'}</button>    
            </form>
            <p>id: {params.id ? params.id : 'no id'}</p>
            <p>{JSON.stringify(location.state)}</p>
        </div>
    )
}

export default MonsterForm