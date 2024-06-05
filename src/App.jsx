import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import LeftSidebar from './Components/LeftSidebar/LeftSidebar'
import RightSidebar from './Components/RightSidebar/RightSidebar'
import MiddleSidebar from './Components/MiddleSidebar/MiddleSidebar'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="bodybar">
      <LeftSidebar/>
      <MiddleSidebar/>
      <RightSidebar/>

      </div>

    </div>
  )
}

export default App
