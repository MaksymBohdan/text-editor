import React, { Component } from 'react';
import './App.css';
import ControlPanel from './control-panel/ControlPanel';
import FileZone from './file-zone/FileZone';
import getMockText from '../services/text.service';

class App extends Component {
  state = {
    text: ''
  };

  componentDidMount() {
    this.getText();
  }

  getText = () => {
    getMockText()
      .then(text => this.setState({ text }))
      .catch(err => console.error(err));
  };

  render() {
    const { text } = this.state;

    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel />
          <FileZone textToDisplay={text} />
        </main>
      </div>
    );
  }
}

export default App;
