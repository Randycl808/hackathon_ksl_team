// importing axios
import axios from 'axios'
// importing useEffect and useState from react
import React, {useEffect, useState } from 'react'

// exporting the data from the functions to be able to use on other pages and components by using the DataContext
export const DataContext = React.createContext()

// exporting the props from the DataProvider to use for the monsterData useState
export const DataProvider = (props) => { 
    const [monsterData, setMonsterData] = useState([])

    // using an effect to console.log that the DataProvider is being used and then it is getting the monsterData and putting it into an array
    useEffect(() => {
        console.log('USEEFFECT IN DATAPROVIDER CALLED')
        getMonsterData()
    },[])

    // a function to addMonster, sets the monsterData, spreads across the monsterData and puts them into objects in an array, adds the new monster and it's array of items into a new object in the array with the current monsterData
    const addMonster = (monster) => {
        setMonsterData([...monsterData, {monster:monster, items:[]}])
    }

    // a function to deleteItem, does an async/await call to axios to get the monster id and item id, deletes item id that matches the id that is at the end of the api route
    const deleteItem = async (monster_id, id) => {
        let res = await axios.delete(`/api/monsters/${monster_id}/items/${id}`)

        // a function fo filter out deleted item, it maps the monsterData 
        const filteredMonsters = monsterData.map( mon => {
            // if the monster id does not match the id given, it will return it in an array with the remaining monsters
            if(mon.monster.id !== mon.id){
            return mon
        } else {
            // if it does match the id given, it will return the monster and the items were the id does not match the id given
            return {monster: mon.monster, items: mon.items.filter(i=> i.id !== id)}
        }
    })

    // set the monsterData as the filteredMonsters
    setMonsterData(filteredMonsters)
    }

    // function to delete a monster
    const deleteMonster = async (id) => {
        // does an axios call async/await to get the monster of the matching id
        let res = await axios.delete(`/api/monsters/${id}`)
        // filters out the delete monster where the id matches and returns the monsters where the id doesn't match into an array
        const filteredMonsters = monsterData.filter(mon => mon.monster.id !== id)
        // setting the monsterData as the filtered monsters
        setMonsterData(filteredMonsters)
    }

    // function to get all monsterData
    const getMonsterData = async () => {
        // doing an axios async/await call to get all data from setMonsterData
        let res = await axios.get(`/api/all`)
        setMonsterData(res.data)
    }
    return (
        // Outputs the data for the DataProvider, the monsterData, addMonster, deleteItem, and deleteMonster function, setting them as child element from the DataProvider
        <DataContext.Provider value={{ monsterData, addMonster, deleteItem, deleteMonster }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider