import { Component } from "react";
//import Card from "../card/card.component";
import Card from "../card/card.component";
import './card-list.styles.css'

 class CartList extends Component{

    render(){
        const {monsters} = this.props;
        
        
        return(
            <div className="card-list">
               {
                
                monsters.map(monster=>{
                 //  const {name, id, email}= monster;
                    return(

                        <Card monster= {monster} />

                    );
                })
               }
            </div>
        );
    }

}

export default CartList