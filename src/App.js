import React from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Nominations from './components/Nominations'

const App = () => {
  return (
    <div>
     <h1>Welcome to the Shoppies</h1>
      <SearchBar />
      <SearchResults />
      <Nominations />
    </div>

  )
}

export default App
