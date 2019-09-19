import React from "react";
import { connect } from "react-redux";

import InputText from "../../components/InputText";
import { inputChange } from "./home-action";
import Button  from '../../components/Button'
import { getBooks } from "../BookList/books-actions";

class Home extends React.Component {
  state = {
    searchTerm: ""
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    const { getBooks } = this.props;
    getBooks(searchTerm)
  };

  handleSubmit = text => {
    const { inputChange } = this.props;
    this.setState({
      searchTerm: text
    });
    inputChange(text);
  };

  render() {
    const { searchTerm } = this.props;
    return (
      <div className="App">
        <h1>Find you favorite books here!</h1>
        <InputText text={searchTerm} onSave={this.handleSubmit} />
        <Button text="Search" onButtonClick={this.handleSearch} />
      </div>
    );
  }
}
const mapStateToProps = () => {};
export default connect(
  mapStateToProps,
  { inputChange, getBooks }
)(Home);
