import { useEffect, useState } from 'react'
import './App.css'
import Preloader from './components/pre-loaders/preloader'
import Cv from './components/cv-page/cv'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>setLoading(false), 4000)
  }, [])

  return (
    <>
      <div>
        {loading? <Preloader/>: <Cv/>}
      </div>
    </>
  )
}

export default App
