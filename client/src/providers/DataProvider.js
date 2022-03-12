import axios from 'axios'
import React, {useEffect, useState } from 'react'

export const DataContext = React.createContext()

export const DataProvider = (props) => { 
    const [monsterData, setMonsterData] = useState([])

    useEffect(() => {
        console.log('USEEFFECT IN DATAPROVIDER CALLED')
        getMonsterData()
    },[])

    const addMonster = (monster) => {
        setMonsterData([...monsterData, {monster:monster, items:[]}])
    }

    const deleteItem = async (monster_id, id) => {
        let res = await axios.delete(`/api/monsters/${monster_id}/items/${id}`)

    const filteredMonsters = monsterData.map( mon => {
        if(mon.monster.id !== mon.id){
            return mon
        } else {
            return {monster: mon.monster, items: mon.items.filter(i=> i.id !== id)}
        }
    })

    setMonsterData(filteredMonsters)
    }

    const deleteMonster = async (id) => {
        let res = await axios.delete(`/api/monsters/${id}`)
        const filteredMonsters = monsterData.filter(mon => mon.monster.id !== id)
        setMonsterData(filteredMonsters)
    }

    const getMonsterData = async () => {
        let res = await axios.get(`/api/all`)
        setMonsterData(res.data)
    }
    return (
        <DataContext.Provider value={{ monsterData, addMonster, deleteItem, deleteMonster }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider