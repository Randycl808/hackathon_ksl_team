import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'

const MonsterForm = () => {
    const params = useParams()
    return (
        <div className= 'border'>
            <h1>MonsterForm</h1>
            <p>id: {params.id ? 'Edit' : 'New'}</p>
        </div>
    )
}

export default MonsterForm