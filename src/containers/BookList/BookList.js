import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class BookList extends Component {
  render() {
    return (
      <div>
        BookList
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(BookList);
