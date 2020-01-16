import React from 'react';
import './styles/App.css';
import Slide from './Slide.js';
import ftmLogo from './assets/ftmlogo.png';
import Welcome from './Welcome.js';
import { tour } from './tour.js';

export default class App extends React.Component {

  state = {
    page: null
  }

  prev = () => {
    let pageNum = this.state.page
    if (!pageNum || pageNum === 0) {
      return null;
    } else {
      this.setState({
        page: pageNum-1
      })
    }
  }

  next = () => {
    let pageNum = this.state.page
    if (pageNum === null) {
      this.setState({
        page: 0
      })
    } else if (pageNum === 75) {
      return null;
    } else {
      this.setState({
        page: pageNum+1
      })
    }
  }

  begin = () => {
    this.setState({
      page: 0
    })
  }

  end = () => {
    this.setState({
      page: 75
    })
  }

  reset = () => {
    this.setState({
      page: null
    })
  }

  render() {

    return(
        <div className="App">

          <div className="Content">
          <div className="Top">
          <img src={ftmLogo} alt='ftmLogo'/>
            <header onClick={this.reset}>
            George Washington & NYC
            </header>

            <h3>{this.state.page === null ? 0 : this.state.page+1} / 76</h3>

            <div className="Navigation">
              <span onClick={this.begin}>begin</span>
              <span onClick={this.prev}>prev</span>
              <span onClick={this.next}>next</span>
              <span onClick={this.end}>end</span>
            </div>

          </div>

            { this.state.page !== null ? <Slide info={tour[this.state.page]}/> : <Welcome />}


          </div>

        </div>
    )
  }

}
