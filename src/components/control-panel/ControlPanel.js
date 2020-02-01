import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
  render() {
    const { changeStyle } = this.props;
    return (
      <div id="control-panel">
        <div id="format-actions">
          <button
            className="format-action"
            type="button"
            data-name="bold"
            onClick={changeStyle}
          >
            <b>B</b>
          </button>
          <button
            className="format-action"
            type="button"
            data-name="italic"
            onClick={changeStyle}
          >
            <i>I</i>
          </button>
          <button
            className="format-action"
            type="button"
            data-name="underline"
            onClick={changeStyle}
          >
            <u>U</u>
          </button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
