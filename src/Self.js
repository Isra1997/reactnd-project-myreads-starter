import React , {Component} from 'react';


class Shelf extends Component{
    state ={
        shelves :['currentlyReading','wantToRead','read']
    }
    render(){
        return(
        <div className="list-books-content">
            {this.state.shelves.map((Shelf)=>(
                 <div className="bookshelf" key={}>
                     <h2 className="bookshelf-title">{Shelf}</h2>
                 </div>
    ))}
        </div>)
    }
}

export default Shelf