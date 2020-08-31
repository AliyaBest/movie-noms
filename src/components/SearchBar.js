import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      searchTerm: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      searchTerm: ""
    });
  }

  render() {
    return (
      <div>
        <form id="searchForm" onSubmit={this.handleSubmit}>
          <input
            id="searchTerm"
            value={this.state.searchTerm}
            type="text"
            placeholder="Search Movies"
            onChange={this.handleChange}
          ></input>
          <button value="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
