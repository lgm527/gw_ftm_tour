import React from 'react';
import './styles/App.css';

function Slide(props) {

    return(
      <div className="Slide">
        <h3>
        {props.current.currentSlideTitle}
        </h3>

        <div>
        {props.current.currentSlideNum}
        </div>
      </div>
    )

}

export default Slide;
