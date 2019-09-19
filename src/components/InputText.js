import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputText extends Component {
  state = {
    text: this.props.text || '', // eslint-disable-line
  };

  handleOnChange = e => {
    const val = e.target.value;
    this.setState({
      text: val,
    });
    const { onSave } = this.props;
    onSave(val)
  };

  handleBlur = e => {
    const { onSave } = this.props;
    onSave(e.target.value.trim());
  };

  handleSubmit = e => {
    const { onSave } = this.props;

    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
    }
  };

  renderComponent = (props, state) => {
    return (
      <div className="input-text">
        <input
          type="text"
          autoFocus // eslint-disable-line
          onChange={this.handleOnChange}
          onBlur={this.handleBlur}
          onKeyDown={this.handleSubmit}
          value={state.text}
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
  text: PropTypes.string.isRequired,
};
