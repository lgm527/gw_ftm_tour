import React from 'react';
import './styles/App.css';

function Welcome() {


    return(
      <div className="Welcome">
        <h3>
        WELCOME!
        </h3>

        <img src="https://archive.makinghistorynow.com/wp-content/uploads/2016/04/faceswap-gw-600x574.jpg" alt="GW" style={{height: '50%', width: '50%'}}/>

        <p>
        Please click <b>begin</b> or <b>next</b> (above) to get started
        </p>
      </div>
    )

}

export default Welcome;
