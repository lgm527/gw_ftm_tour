import React from 'react';
import './styles/App.css';

function SlideContainer(props) {

    return(

      <div className="Slides">

      <h3>{props.info.title}</h3>

      <p>{props.info.slide}</p>

      </div>
    )

}

export default SlideContainer;
