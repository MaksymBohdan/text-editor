import React, { Component } from 'react';
import './App.css';
import ControlPanel from './control-panel/ControlPanel';
import FileZone from './file-zone/FileZone';
import getMockText from '../services/text.service';

class App extends Component {
  state = {
    text: [],
    selectedWord: {}
  };

  componentDidMount() {
    this.getText();
  }

  getText = () => {
    getMockText()
      .then(data => {
        const text = data.split(' ').map((word, idx) => ({
          content: word,
          bold: false,
          italic: false,
          underline: false,
          id: idx
        }));

        this.setState({ text });
      })
      .catch(err => console.error(err));
  };

  getSelectedWord = e => {
    const { text } = this.state;
    const selectedWord = text[e.target.dataset.id];

    this.setState({ selectedWord });
  };

  changeStyle = e => {
    const { selectedWord, text } = this.state;
    if (Object.keys(selectedWord).length <= 0) return;

    const styleChanges = e.currentTarget.dataset.name;
    const changedWord = {
      ...selectedWord,
      [styleChanges]: !selectedWord[styleChanges]
    };
    const textToUpdate = [...text];
    textToUpdate.splice(selectedWord.id, 1, changedWord);

    this.setState({ text: textToUpdate, selectedWord: changedWord });
  };

  render() {
    const { text, selectedWord } = this.state;

    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel
            changeStyle={this.changeStyle}
            selectedWord={selectedWord}
          />
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
