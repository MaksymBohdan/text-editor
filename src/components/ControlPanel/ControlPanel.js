import React from 'react';
import { StyledButton, FormatActions, Controlpanel } from './styles';

const ControlPanel = ({
  changeStyle,
  selectedWord: { bold, italic, underline }
}) => (
  <Controlpanel>
    <FormatActions>
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
    </FormatActions>
  </Controlpanel>
);

export default ControlPanel;
