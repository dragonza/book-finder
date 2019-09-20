import React, { Component } from "react";
import PropTypes from "prop-types";
import "./button.scss";

class Button extends Component {
  handleOnSubmit = () => {
    const { onButtonClick } = this.props;
    onButtonClick()
  };


  render() {
    const { text } = this.props;
    return <button onClick={this.handleOnSubmit} className="button">{text}</button>;
  }
}

Button.propTypes = {
  text: PropTypes.string
};

export default Button;
