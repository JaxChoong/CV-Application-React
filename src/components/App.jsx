import { useState } from 'react'
import '../styles/App.css'
import GenInfo from './GenInfo.jsx'
import EduInfo from './EduInfo.jsx'
import PracExp from './PracExp.jsx'

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <GenInfo />
      <EduInfo />
      <PracExp />
    </>
  )
}

export default App
