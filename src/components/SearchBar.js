import React from 'react'

class SearchBar extends React.Component {

  render(){
    return (
      <div>
        <form>
          <input placeholder="Search Movies"></input>
          <button value="submit">SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default SearchBar
