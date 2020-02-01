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
        const text = data.split(' ').map((word, idx) => ({
          content: word,
          bold: true,
          italic: true,
          underline: true,
          id: idx
        }));

        this.setState({ text });
      })
      .catch(err => console.error(err));
  };

  getSelectedWord = e => this.setState({ selectedId: e.target.dataset.id });

  changeStyle = e => {
    const { selectedId, text } = this.state;
    if (!selectedId) return;

    const styleChanges = e.currentTarget.dataset.name;
    const wordToChange = text[selectedId];
    const changedWord = {
      ...wordToChange,
      [styleChanges]: !wordToChange[styleChanges]
    };
    const textToUpdate = [...text];
    textToUpdate.splice(selectedId, 1, changedWord);

    this.setState({ text: textToUpdate });
  };

  render() {
    const { text } = this.state;

    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel changeStyle={this.changeStyle} />
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
