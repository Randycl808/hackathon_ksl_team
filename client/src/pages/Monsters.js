import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Monsters = () => {
    const navigate = useNavigate()
    const [monsters, setMonsters] = useState([])
    useEffect(()=>{
        console.log('mounted and doing api call to get monsters')
        getMonsters()
    },[])

    const getMonsters = async()=>{
        let res = await axios.get('/api/monsters')
        setMonsters(res.data)
    }
  


    return (
        <div>
            <h1>Monsters</h1>
            <button onClick={()=>navigate('/monsters/new')}>new</button>
            <div>
                
            </div>
            <p>{JSON.stringify(monsters)}</p>
            </div>
    )
}

export default Monsters