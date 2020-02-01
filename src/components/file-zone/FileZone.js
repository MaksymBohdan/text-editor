import React, { Component } from 'react';
import './FileZone.css';

const FileZone = ({ textToDisplay }) => (
  <div id="file-zone">
    <div id="file">{textToDisplay}</div>
  </div>
);
export default FileZone;
