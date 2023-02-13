import React from "react";

import "../styles/App.css";

const data = {
  2018: ["Avengers 1", "Now you see me", "Fast and Furious 7"],
  2019: ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
  2020: [
    "Final Avengers Movie(Iron man dies)",
    "Now you finally used Lenskart",
    "Covid Came",
  ],
  2021: ["Covid Returns"],
  2022: ["Adventures of Saiman", "Adventures of Shaktiman"],
};


class App extends React.Component {
  constructor(){
    super()
    this.state={
      selectedYear: null
    }
  }
  changeYear = (e) =>{
    console.log(e.target.value);
    this.setState({selectedYear: e.target.value})
  }
  render() {
    return (
      <div id="main">
        <select onChange={this.changeYear}>
          <option value={null}></option>
          {Object.keys(data).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <div id="selected-year">{this.state.selectedYear?`Selected year-${this.state.selectedYear}`:"No year selected"}</div>
        <ul>
          { this.state.selectedYear && 
            data[this.state.selectedYear].map(movie => {
              return <li key={movie}>{movie}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
