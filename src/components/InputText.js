import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class InputText extends Component {
  handleOnChange = e => {
    const val = e.target.value;

    const { onChange } = this.props;
    onChange(val);
  };

  handleBlur = e => {
    const { onChange } = this.props;
    onChange(e.target.value.trim());
  };

  handleSubmit = e => {
    const { onSave } = this.props;

    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
    }
  };

  handleRemoveClick = () => {
    const { onRemove } = this.props;
    onRemove();
  };

  renderComponent = (props) => {
    const classNames = classnames("input-text", props.className);
    return (
      <div className={classNames}>
        {props.text && <div className="close" onClick={this.handleRemoveClick} />}
        <input
          placeholder={props.placeholder}
          type="text"
          autoFocus // eslint-disable-line
          onChange={this.handleOnChange}
          onBlur={this.handleBlur}
          onKeyDown={this.handleSubmit}
          value={props.text}
        />
      </div>
    );
  };

  render() {
    return this.renderComponent(this.props, this.state);
  }
}

InputText.propTypes = {
  onSave: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
