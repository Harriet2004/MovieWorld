import React, { useState } from 'react'
import Search from './components/search'

const App = () => {
  const[search, setSearch] = useState('Hi');

  return (
    <main>
      <div className = "pattern" />
      <div className = "wrapper">
        <header>
          <img src = "./hero-img.png"></img>
          <h1> Find <span className = "text-gradient">Movies</span> Without A Hassle </h1>
        </header>

        <Search search = {search} setSearch = {setSearch}/>
      </div>

    </main>
  )
}

export default App