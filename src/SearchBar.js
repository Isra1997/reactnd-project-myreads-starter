import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js';
import ListBook from './ListBook';


class SearchBar extends React.Component{

    state = {
        quriedBooks:[]
    }

   
   searchBook(query){
    if(query){
    BooksAPI.search(query).then((books)=>{
        if(Array.isArray(books)){
            this.setState({
                quriedBooks:books
            })
        } else{
            this.setState({
                quriedBooks:[]
            })
        
    }})
}else{
    this.setState({
        quriedBooks:[]
    })
}

    }

   
       

    

    render(){

        return(
        <div>
        <div className="search-books-bar">
        <Link to="/">
        <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event)=> this.searchBook(event.target.value)}/>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
  <ListBook allbooks={this.props.allbooks} books={this.state.quriedBooks} onChangeShelf={this.props.onChangeShelf}/>
    </div>)
    }

}

export default SearchBar