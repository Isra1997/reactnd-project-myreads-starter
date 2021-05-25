import React from 'react';
import ListBook from './ListBook';

class Shelf extends React.Component{

    state ={
        shelves :['Currently Reading','Want To Read','Read'],
    }
    
    filterBooks(shelf){
        return this.props.allbooks.filter((book)=>( book.shelf === shelf))
    }

    cleanShelfName(shelfName){
        return shelfName.charAt(0).toLowerCase() + shelfName.slice(1).replace(/ /g,'')
    }

    render(){
        console.log(this.props.allbooks);
        return(
        <div className="list-books-content">
            {this.state.shelves.map((Shelf, index)=>(
                 <div className="bookshelf" key={index}>
                     <h2 className="bookshelf-title">{Shelf}</h2>
                     {console.log()}
                     <ListBook allbooks={this.props.allbooks}   books={this.filterBooks(this.cleanShelfName(Shelf))} onChangeShelf={this.props.onChangeShelf}/>
                 </div>
    ))}
        </div>)
    }
}

export default Shelf