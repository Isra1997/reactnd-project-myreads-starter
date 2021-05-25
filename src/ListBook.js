import React , {Component} from 'react';
class ListBook extends Component{

    constructor(props){
      super(props);
      this.valueValidator = this.valueValidator.bind(this)
    }
    valueValidator(book){
      const index = this.props.allbooks.findIndex(b => b.id === book.id)
      if(index !== -1){
        return this.props.allbooks[index].shelf
      }
      else{
        return 'none'
      }

    }



    render(){
        return(<div className="bookshelf-books">
            <ol className="books-grid">
                {this.props.books.filter((book)=>(  book.hasOwnProperty('authors') && typeof book.imageLinks && book.hasOwnProperty('imageLinks'))).map((book,index)=>(
                    <li key={index}>
                      <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:`url(${book.imageLinks.smallThumbnail})`  }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(e)=> this.props.onChangeShelf(book,e.target.value,this.props.allbooks)} value={this.valueValidator(book)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">none</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors.join(" ")}</div>
                        </div>
                    </li>))}
            </ol>
        </div>)
    }

}

export default ListBook