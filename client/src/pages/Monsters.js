//import react, usestate, and use effect functionality 
import React, {useState, useEffect} from 'react'
//import use navigate functionality 
import {useNavigate} from 'react-router-dom'
//import axios that is used to create HTTP requests from db
import axios from 'axios'
//imports the monster page for use
import Monster from '../components/Monster'
//declare function called monsters
const Monsters = () => {
    const navigate = useNavigate() //navigate hook that is used for the navigate function in the code (on line 53 for example)
    const [monsters, setMonsters] = useState([]) //this is the monster state and the setter to set it 
    useEffect(()=>{ //have a useEffect so we can get the monsters on mount 
        console.log('mounted and doing api call to get monsters')
        getMonsters() //calling the getMonsters function 
    },[])

    const addMonster = async (monster)=>{ //sends an http post request to create a new monster in the db
        try {
            let res = await axios.post("/api/monsters", monster) //does axios call here; use async/await  
            setMonsters([res.data, ...monsters]);                 // setting the new monster(res.data) then using spread operator to pull all the other monsters
          } catch (err) {                                         //and put them in the same array as the new monster 
            alert("error occured");  //error handling is great for debugging! 
          }
        }
    
   //declaring a function called 'deleteMonster'
    const deleteMonster = async (id) => {  //it's asynchronous function that does axios call to the db
        await axios.delete(`/api/monsters/${id}`);      //using the delete method to delete a monster with a specific id from the specified path
        let filteredMonsters = monsters.filter(monster => monster.id !== id) //declares variable called filteredMonsters
        setMonsters(filteredMonsters)  //filter is going through the monsters array, and looking at each monster in the array, and then
    }                                   //filtering out the id that matches and returning all the id's that do not match into a new array
            //setMonsters is setting our state with the new filteredMonster data
    
    const getMonsters = async()=>{  //declaring a function that displays all the monsters
        try {
        let res = await axios.get('/api/monsters')  //do an axios call here; 
        setMonsters(res.data)           //set our state to res.data; which is all the monster data in the array
        }catch(err){
            alert('error in getMonsters')
        }
    }

    const renderMonsters = () => {
        return monsters.map(monster=> {  //returning monster state. map and go through each monster and and return
                                        //the monster component that we just created and give it a key, monster.id
            return <Monster key={monster.id} {...monster}
            deleteMonster={deleteMonster}  //if any monsters are added or deleted, then it's passed into this 'deleteMonster'
            addMonster={addMonster}/>      //placeholder that is waiting for the data from the deleteMonster function     
        })                                  
    }

  
    return (
        <div>
            {/* //h1 header that diplays "Monsters" */}
            <h1>Monsters</h1>  
            {/* creates a button, when button is clicked it uses navigate to get to the new page that has a form to create a new form*/}
            <button className="button" onClick={()=>navigate('/monsters/new')}>new</button>
            <div>
            {/* calls the renderMonsters function */}
            {renderMonsters()} 
            </div>
            {/* diplays the monsters as JSON text */}
            <p>{JSON.stringify(monsters)}</p>  
            </div>
    )
}

export default Monsters