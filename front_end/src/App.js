import { useState, useEffect } from 'react'
import DoorStatus from './components/DoorStatus'
import Footer from './components/Footer'
import axios from 'axios'

const App = () => {
  const [doorOpen, setDoorOpen] = useState(true)

  useEffect(() => {
    getDoorStatus()
  }, [])

  const getDoorStatus = () => {
    axios.get('api/doorstatus/').then((response) => {
      setDoorOpen(response.data)
    })
  }

  return (
    <div>
      <DoorStatus doorOpen={doorOpen}/>
      <Footer />
    </div>
  )
}

export default App
