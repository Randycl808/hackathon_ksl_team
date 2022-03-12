import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Monster from '../components/Monster'
import { DataContext } from '../providers/DataProvider'

const Home = () => {
    useEffect(()=>{
        console.log("Use effect in home called")
    },[])
    const{ monsterData, deleteItem, deleteMonster} = useContext(DataContext)
    
    const renderMonsterData = () => {
        return monsterData.map((mon) =>{
            return (
                <div className='border' key={mon.monster.id} >
                    <p>Monster Name: {mon.monster.name}</p>
                    <p>Monster id: {mon.monster.id}</p>
                    <button onClick={()=>deleteMonster(mon.monster.id)}>Delete Bug</button>
                    <div className='border'>
                    {mon.items.map((i) => {
                        return(
                            <div className='border' key={i.id}>
                                <p>Name: {i.name}</p>
                                <p> ID: {i.id}</p>
                                <p> Description: {i.description}</p>
                                <p> Price: {i.price}</p>
                                <button onClick={()=>deleteItem(mon.monster.id, i.id)}>Delete treatment</button>
                                </div>
                        );
                    })}
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='home'>
            <h1>Home</h1>
            <h2><Link to="/monsters">Monsters</Link></h2>
            <h2><Link to="/jobs">Jobs for Monsters</Link></h2>
            <h2><Link to="/about">About Us</Link></h2>
            <div className="border">{renderMonsterData()}</div>
            <hr />
             <p className="border">{JSON.stringify(monsterData)}</p>
        </div>
    )
}

export default Home