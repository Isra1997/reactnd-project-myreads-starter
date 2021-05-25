import React ,{Component}from 'react';
import './App.css'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js'
import Shelf from './Shelf.js'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';


class BooksApp extends Component {
  constructor(props){
    super(props);
    this.state ={
      allbooks :[]
    }
    this.changeBookShelf= this.changeBookShelf.bind(this);
  }

  getBooks(){
    BooksAPI.getAll().then((Books)=>{
      this.setState(()=>({
        allbooks:Books
      }))
    })
  }

  changeBookShelf=(bo,shelf,all)=>{
    const index = all.findIndex(b => b.id === bo.id)

    if(index === -1){
      all = all.concat(bo)
      all[all.length-1].shelf = shelf
    }else{
      all[index].shelf=shelf
    }
    this.setState({allbooks:all})

    BooksAPI.update(bo,shelf).then((book)=>{
    })
    
  }

  componentDidMount(){
    this.getBooks();
  }

  handleCreateClick(){
    const history = useHistory();
    history.push("/create")
  }

  render() {

    return (
      
      <div className="app">
        
       {/* Main Page route */}
      <Route exact path='/' render={()=>(<div className="list-books">
           {/* NavBar  */}
            <div className="list-books-title">  
              <h1>MyReads</h1>
            </div> 
            <Shelf allbooks={this.state.allbooks} onChangeShelf={this.changeBookShelf}/>
            <div className="open-search">
              <Link to="/search">
              <button>Add a book</button>
              </Link>
            </div>
          </div>)}>
      </Route>

      <Route path='/search' render={()=>(
        <div className="search-books">
          <SearchBar allbooks={this.state.allbooks} onChangeShelf={this.changeBookShelf}/>
        </div>)}> 
      </Route>
      </div>
    )
  }
}

export default BooksApp
