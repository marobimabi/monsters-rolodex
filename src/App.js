import { Component } from 'react';
import CartList from './components/card-List/card-list-component';
import SearchBox from './components/searchBox/search-box.component';



import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
     
      Cars: [],
      searchField: ''
    } 
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then((Response) => Response.json()).then((mycar)=>
    this.setState(
      ()=> {
        return {Cars : mycar};
      }
    )
    )
  }
  
  OnsearchChange = (event) =>{ 
         
    const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(
     () => {
       return {searchField};
     }
    )
   }
  render(){
    const  {OnsearchChange} = this;
    const {searchField, Cars} = this.state;

    const filterredMonsters = Cars.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);

     });

    return (
      <div className="App">
       <h1 className='app-title'>Pobohash Monsters </h1>
       <SearchBox onSearchHandler={OnsearchChange} placeholder='Search Monsters' />
       <CartList monsters = {filterredMonsters }/> 
       
      </div>
    );
  }
}

export default App;
