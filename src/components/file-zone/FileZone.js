import React, { Component } from 'react';
import './FileZone.css';
import styled from 'styled-components';

const Word = styled.span`
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
`;

class FileZone extends Component {
  render() {
    const { textToDisplay, getSelectedWord } = this.props;
    return (
      <div id="file-zone">
        <div id="file" onDoubleClick={getSelectedWord}>
          {textToDisplay.map(({ content, id, italic, bold, underline }) => (
            <Word
              key={id}
              data-id={id}
              italic={italic}
              bold={bold}
              underline={underline}
            >
              {content}{' '}
            </Word>
          ))}
        </div>
      </div>
    );
  }
}

export default FileZone;
