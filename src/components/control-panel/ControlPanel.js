import React, { Component } from 'react';
import './ControlPanel.css';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => (props.isAppliedStyle ? 'blue' : 'grey')};
`;

class ControlPanel extends Component {
  render() {
    const {
      changeStyle,
      selectedWord: { bold, italic, underline }
    } = this.props;

    return (
      <div id="control-panel">
        <div id="format-actions">
          <StyledButton
            isAppliedStyle={bold}
            className="format-action"
            type="button"
            data-name="bold"
            onClick={changeStyle}
          >
            <b>B</b>
          </StyledButton>
          <StyledButton
            isAppliedStyle={italic}
            className="format-action"
            type="button"
            data-name="italic"
            onClick={changeStyle}
          >
            <i>I</i>
          </StyledButton>
          <StyledButton
            isAppliedStyle={underline}
            className="format-action"
            type="button"
            data-name="underline"
            onClick={changeStyle}
          >
            <u>U</u>
          </StyledButton>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
