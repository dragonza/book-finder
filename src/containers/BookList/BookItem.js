import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class BookItem extends Component {
  render() {
    return (
      <div>
        BookItem
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(BookItem);
