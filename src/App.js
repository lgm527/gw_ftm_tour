import React from 'react';
import './styles/App.css';
import { tour } from './tourScript.js';
import Slide from './Slide.js';
import ftmLogo from './assets/ftmlogo.png';

export default class App extends React.Component {

  state = {
    script: tour,
    current: null,
    slideTitle: null,
    slideNum: 0,
  }

  prev() {

  }

  next() {

  }

  render() {
    console.log(this.state.script);
    return(
        <div className="App">

          <div className="Content">
          <img src={ftmLogo} alt='ftmLogo'/>
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
