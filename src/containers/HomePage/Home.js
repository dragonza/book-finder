import React from "react";
import { connect } from "react-redux";

import InputText from "../../components/InputText";
import { inputChange } from "./home-action";
import Button  from '../../components/Button'
import { getBooks } from "../BookList/books-actions";
import BookList from "../BookList/BookList";

class Home extends React.Component {
  state = {
    searchTerm: ""
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    if (!searchTerm.length) return;
    const { getBooks } = this.props;
    getBooks(searchTerm)
  };

  handleInputChange = text => {
    const { inputChange } = this.props;

    this.setState({
      searchTerm: text
    });
    inputChange(text);
  };

  handleClearText = () => {
    this.setState({
      searchTerm: ''
    });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="app">
        <div className="app__name">
          <h1>Find you favorite books here!</h1>
        </div>
        <div className="app__search">
          <InputText
            onRemove={this.handleClearText}
            placeholder="type author, subject, book name..."
            className="app__input" text={searchTerm} onChange={this.handleInputChange} onSave={this.handleSearch}/>
          <Button text="Search" onButtonClick={this.handleSearch} />
        </div>

        <BookList />
      </div>
    );
  }
}

export default connect(
  null,
  { inputChange, getBooks }
)(Home);
