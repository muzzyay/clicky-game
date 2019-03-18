import React from 'react';



function CardBody(props) {
    return (<div className={`card mb-3 ${props.image===props.hover ? "shadow-lg" : " "}`} onMouseOver={()=> props.handleHover(props.image)} onMouseLeave={()=>props.mouseLeave()} onClick={()=>props.handleClick(props.image)} style={{width: "200px", height: "200px", opacity: props.hover===props.image ? 0.3 : 1}}>
        <img src={props.image} className="card-img-top" alt="sightseeing"/>
    
  </div>)
      
}

export default CardBody;