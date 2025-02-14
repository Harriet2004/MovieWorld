import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) => {

  const [loved, setLoved] = useState(false);

  return ( 
    <div className = 'card'>
    <h2>{title}</h2>
    
    <button onClick = {() => setLoved(!loved)}>
      {loved ? "❤️" : "🤍"}
    </button>
    
    </div>
  )
}

const App = () => {

  return (
    <div className = 'card-contain'>
    <Card title = "Die with a smile" />
    <Card title = "APT" />
    <Card title = "Old Town Road" />
    </div>
  )
}

export default App
