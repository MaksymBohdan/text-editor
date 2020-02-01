import React, { Component } from 'react';
import './App.css';
import ControlPanel from './control-panel/ControlPanel';
import FileZone from './file-zone/FileZone';
import getMockText from '../services/text.service';

class App extends Component {
  state = {
    text: [],
    selectedId: null
  };

  componentDidMount() {
    this.getText();
  }

  getText = () => {
    getMockText()
      .then(data => {
        const text = data.split('').map((word, idx) => ({
          content: word,
          bold: false,
          italic: true,
          id: idx
        }));

        this.setState({ text });
      })
      .catch(err => console.error(err));
  };

  getSelectedWord = e => {
    // const selectedWord = window.getSelection().toString();
    const selectedWord = e.target.dataset.id;

    console.log(selectedWord);
    this.setState({ selectedWord: selectedWord !== '' && selectedWord });
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
          <FileZone
            textToDisplay={text}
            getSelectedWord={this.getSelectedWord}
          />
        </main>
      </div>
    );
  }
}

export default App;
