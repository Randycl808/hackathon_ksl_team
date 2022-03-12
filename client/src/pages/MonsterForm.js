import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'

const MonsterForm = () => {
    const location = useLocation()
    const [name, setName] = useState(location.state ? location.state.name : '')
    const params = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(params.id){
            console.log('update')
            console.log({name, id:params.id})
        } else {
            console.log('create')
            console.log({name, setName})
        }
    }

    //     try {
    //         if (params.id) {
    //             await axios.put(`/api/monsters/${params.id}`, {
    //                 name,
    //                 id: params.id,
    //             })
    //         } else {
    //             let res = await axios.post(`/api/monsters`, {name})
    //             console.log('res.data:', res.data)
    //         }
    //         Navigate('/monsters')
    //     } catch (err) {
    //         alert('err')
    //     }
    // }
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