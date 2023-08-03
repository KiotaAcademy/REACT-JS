import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Header from './components/header'

function App() {
  const [allHouses, setAllHouses] = useState([])
  useEffect(()=>{
    const fetchHouses = async () => {
      const response = await fetch('./houses.json')
      const houses = await response.json()
      setAllHouses(houses)
    }
    fetchHouses()
  },[])

  const featuredHouse = useMemo(()=>{
    if (allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length)
      return allHouses[randomIndex]
    }
  }, [allHouses])
  return (
    <>
    <div className='container'>
      <Header subtitle="providing houses all over the world" title = "multiverseK"/>
    </div>
    </>
  )
}

export default App
