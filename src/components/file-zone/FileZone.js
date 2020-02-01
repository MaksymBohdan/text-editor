import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {
  render() {
    const { textToDisplay, getSelectedWord } = this.props;
    return (
      <div id="file-zone">
        <div id="file" onDoubleClick={getSelectedWord}>
          {textToDisplay.map(({ content, id }) => (
            <span key={id} data-id={id} styles>
              {content}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default FileZone;
