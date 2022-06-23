import { Component } from "react";

import './search-box.styles.css'
class SearchBox extends Component{

    render(){
        const {onSearchHandler,placeholder} = this.props;
        return <div>

                <input
                className='search-box  monsters-search-box'
                placeholder={placeholder}
                type='search'
                onChange={onSearchHandler}
                    />
          </div>;
    }
}
export default SearchBox