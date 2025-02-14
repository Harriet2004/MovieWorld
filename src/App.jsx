import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) => {
  return <div className = 'card'>
    <h2>{title}</h2>
    </div>
}

const App = () => {
  return (
    <div className = 'card-contain'>
    <Card title = "Star wars" />
    <Card title = "Gumball" />
    <Card title = "Australia" />
    </div>
  )
}

export default App
