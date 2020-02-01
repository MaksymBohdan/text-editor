import React from 'react';
import { Word, Filezone, File } from './styles';

const FileZone = ({ textToDisplay, getSelectedWord, children }) => (
  <Filezone>
    <File onDoubleClick={getSelectedWord}>
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
    </File>
    {children}
  </Filezone>
);

export default FileZone;
