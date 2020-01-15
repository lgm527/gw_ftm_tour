import React from 'react';
import './styles/App.css';
import { tour } from './tourScript.js';
import Slide from './Slide.js';
import ftmLogo from './assets/ftmlogo.png';
import Welcome from './Welcome.js';

const TITLES = Object.keys(tour);
const SCRIPT = tour;

export default class App extends React.Component {

  state = {
    current: {
      currentSlideTitle: null,
      titleNum: 0,
      currentSlideNum: null,
      slideNum: 0,
    }
  }

  prev = () => {
    if(!this.state.current.currentSlideTitle) {
      return null;
    } else {
      //logic for handling and rendering previously rendered slide
    }
  }

  next = () => {
    if(!this.state.current.currentSlideTitle) {
      this.setState({
        current: {
          currentSlideTitle: TITLES[0],
          currentSlideNum: SCRIPT[TITLES[0]][0],
        }
      })
    } else {
      let slidesLength = SCRIPT[TITLES[0]]
      //logic for handling next slide and next title of slides
    }
  }

  render() {
    console.log( this.state.current );
    return(
        <div className="App">

          <div className="Content">
          <img src={ftmLogo} alt='ftmLogo'/>
            <header>
            George Washington & NYC
            </header>

            { this.state.current.currentSlideTitle ? <Slide current={this.state.current}/> : <Welcome />}

            <div className="Navigation">
              <span onClick={this.prev}>prev</span>
              <span onClick={this.next}>next</span>
            </div>

          </div>

        </div>
    )
  }

}
