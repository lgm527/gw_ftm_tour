import React from 'react';
import './styles/App.css';
import gw from './assets/gw.jpg';

function Welcome() {


    return(
      <div className="Welcome">
        <h3>
        WELCOME!
        </h3>

        <img src={gw} alt="GW" style={{height: '50%', width: '50%'}}/>

        <p>
        Please click <b>begin</b> or <b>next</b> (above) to get started
        </p>
      </div>
    )

}

export default Welcome;
