import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Monster from '../components/Monster'

const Monsters = () => {
    const navigate = useNavigate()
    const [monsters, setMonsters] = useState([])
    useEffect(()=>{
        console.log('mounted and doing api call to get monsters')
        getMonsters()
    },[])

    const addMonster = ()=>{

    }
    
    const deleteMonster = async (id) => {
        await axios.delete(`/api/monsters/${id}`);
        let filteredMonsters = monsters.filter(monster => monster.id !== id)
        setMonsters(filteredMonsters)
    }

    const getMonsters = async()=>{
        try {
        let res = await axios.get('/api/monsters')
        setMonsters(res.data)
        }catch(err){
            alert('error in getMonsters')
        }
    }

    const renderMonsters = () => {
        return monsters.map(monster=> {
            return <Monster key={monster.id} {...monster}deleteMonster={deleteMonster} />
        })
    }

  
    return (
        <div>
            <h1>Monsters</h1>
            <button onClick={()=>navigate('/monsters/new')}>new</button>
            <div>
            {renderMonsters()}
            </div>
            <p>{JSON.stringify(monsters)}</p>
            </div>
    )
}

export default Monsters