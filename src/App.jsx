import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) => {
  const [count, setCount] = useState(0);
  const [loved, setLoved] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${loved}`)
  }, [loved]);

  return ( 
    <div className = 'card' onClick = {() => setCount((prevState) => prevState + 1)}>
    <h2>{title} <br /> {count ? count : null}</h2>
    
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
