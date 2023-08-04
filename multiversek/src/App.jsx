import { useEffect, useMemo, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import FeaturedHouse from './components/featuredhouse'

function App() {
  const [allHouses, setAllHouses] = useState([])
  useEffect(()=>{
    const fetchHouses = async () => {
      const response = await fetch('/src/houses.json')
      const houses = await response.json()
      console.log(houses)
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
    <Router>
      <div className='container'>
        <Header subtitle="providing houses all over the world" title = "multiverseK"/>
      </div>
      <Routes>
        <Route path='/' element= {<FeaturedHouse house={featuredHouse}/>}/>
      </Routes>
    </Router>
  )
}

export default App
