//imports the useContext and useEffect functionality
import React, { useContext, useEffect } from 'react'
//imports links to the Home page
import { Link } from 'react-router-dom'
//importing monster component (not being currently used)
import Monster from '../components/Monster'
//imports the DataProvider to list all the DATA from Back-end
import { DataContext } from '../providers/DataProvider'


const Home = () => {
    //useEffect function- calls back-end DATA on load (AKA on-mount)
    useEffect(()=>{
        console.log("Use effect in home called")
    },[])
    //pulls 3 functions that were created in the DataProvider 
    //useContext creates a common Data that can be accessed throughout any component
    const{ monsterData, deleteItem, deleteMonster} = useContext(DataContext)
    
    //declares a function called 'renderMonsterData'
    const renderMonsterData = () => {
        //maps over each item in monsterData.map, and creates a new array of objects with ID as the key
        return monsterData.map((mon) =>{
            return (
                <div className='border' key={mon.monster.id} >
                    {/* returns monsters Name and ID */}
                    <p>Monster Name: {mon.monster.name}</p>
                    <p>Monster id: {mon.monster.id}</p>
                    {/* button allowing you to delete a Monster with specific ID */}
                    <button className="button" onClick={()=>deleteMonster(mon.monster.id)}>Delete Monster</button>
                    <div className='border'>
                        {/* maps over each item in mon.items.map, and creates a new array of objects with ID as the key*/}
                    {mon.items.map((i) => {
                        return(
                            <div className='border' key={i.id}>
                             {/* returns items ID, Description, and price*/}
                                <p>Name: {i.name}</p>
                                <p> ID: {i.id}</p>
                                <p> Description: {i.description}</p>
                                <p> Price: {i.price}</p>
                                {/* button allowing you to delete an Item with specific ID */}
                                <button className="button" onClick={()=>deleteItem(mon.monster.id, i.id)}>Delete Item</button>
                                </div>
                        );
                    })}
                    </div>
                </div>
            )
        })
    }
    return (
        //list of h2 links, allowing us to navigate between them
        <div className='home'>
            <h1>Home</h1>
            <h2><Link to="/monsters">Monsters</Link></h2>
            <h2><Link to="/jobs">Jobs for Monsters</Link></h2>
            <h2><Link to="/about">About Us</Link></h2>
            {/* calling 'renderMonsterData' function to import DATA */}
            <div className="border">{renderMonsterData()}</div>
            <hr />
            {/* creates a JSON of the returned data as a string (view data as text) */}
             <p className="border">{JSON.stringify(monsterData)}</p>
        </div>
    )
}

export default Home