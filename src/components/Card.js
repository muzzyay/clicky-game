import React from 'react';
import './card.css';



function CardBody(props) {
    return (<div className="card mb-3" onClick={()=>props.handleClick(props.image)} >
        <img src={props.image} className="card-img-top" alt="sightseeing"/>
    
  </div>)
      
}

export default CardBody;