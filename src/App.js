import React from 'react';
import './App.css';
import tour from './tourScript.js';
import Slide from './Slide.js';

export default class App extends React.Component {

  state = {
    script: tour,
    current: null,
    slideNum: 0
  }

  componentDidMount() {
    console.log(this.state.script);
  }

  prev() {

  }

  next() {

  }

  render() {
    return(
        <div className="App">

          <div className="Content">
            <header>
            George Washington & NYC
            </header>

            <Slide />

            <div className="Navigation">
              <span onClick={this.prev}>prev</span>
              <span onClick={this.next}>next</span>
            </div>

          </div>

        </div>
    )
  }

}
