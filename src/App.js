import React from 'react';
import './styles/App.css';
import Slide from './Slide.js';
import ftmLogo from './assets/ftmlogo.png';
import Welcome from './Welcome.js';
import { tour } from './tour.js';

export default class App extends React.Component {

  state = {
    page: null,
    windowWidth: document.body.clientWidth
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({windowWidth: document.body.clientWidth})
    });
  }

  mediaQuery = {
    desktop: 1200,
    tablet: 768,
    phone: 576,
  };

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
        <div className="App" style={{
          width: this.state.windowWidth > this.mediaQuery.phone
          ? '60%'
          : '98%',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          margin: this.state.windowWidth > this.mediaQuery.phone
          ? '1% auto'
          : '1%',
          height: '98%',
        }}>

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

          <div className='footer'>
            Made in
            <span role='img' aria-label='USA'> 🇺🇸 </span>
            with
            <span role='img' aria-label='heart'> ❤️ </span>
            <a href='https://github.com/lgm527' target='_blank' rel='noopener noreferrer'>@lgm527</a> © 2020
          </div>

        </div>
    )
  }

}
