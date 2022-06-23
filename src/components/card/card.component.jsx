import { Component } from "react";
import './card.styles.css'

class Card extends Component{

    render(){
        const {name, id, email,phone}= this.props.monster;
    return(
        
                <div className="card-container" key={id}>  
                
                <img  
                className="imgsize"
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&Size=180x180`}
                />
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{phone}</p>
                </div> 
                
             );
    }
}

export default Card