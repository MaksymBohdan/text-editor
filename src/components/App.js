import React, { Component } from 'react';
import ControlPanel from './control-panel/ControlPanel';
import FileZone from './FileZone/FileZone';
import SunonimusZone from './SynonimusCmp/SynonimusCmp';
import getMockText from '../services/text.service';
import getSimilarWords from '../services/synonimusService';
import { AppContainer, Header, Main } from './styles';

class App extends Component {
  state = {
    text: [],
    selectedWord: {},
    synonimus: []
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
    const { selectedWord } = this.state;
    if (Object.keys(selectedWord).length <= 0) return;

    const styleChanges = e.currentTarget.dataset.name;
    const changedWord = {
      ...selectedWord,
      [styleChanges]: !selectedWord[styleChanges]
    };

    this.updateAppropriateWord(selectedWord, changedWord);
  };

  handleWordReplace = e => {
    const { selectedWord } = this.state;
    if (Object.keys(selectedWord).length <= 0) return;

    const wordToUpdate = {
      ...selectedWord,
      content: e.currentTarget.dataset.name
    };

    this.updateAppropriateWord(selectedWord, wordToUpdate);
  };

  updateAppropriateWord = (currentWord, newWord) => {
    const { text } = this.state;
    const textToUpdate = [...text];

    textToUpdate.splice(currentWord.id, 1, newWord);

    this.setState({ text: textToUpdate, selectedWord: newWord });
  };

  getWords = () => {
    const {
      selectedWord: { content }
    } = this.state;
    if (!content) return;

    getSimilarWords(content)
      .then(synonimus => this.setState({ synonimus }))
      .catch(err => console.log(err));
  };

  render() {
    const { text, selectedWord, synonimus } = this.state;

    return (
      <AppContainer>
        <Header>
          <span>Simple Text Editor</span>
        </Header>
        <Main>
          <ControlPanel
            changeStyle={this.changeStyle}
            selectedWord={selectedWord}
          />
          <FileZone textToDisplay={text} getSelectedWord={this.getSelectedWord}>
            <SunonimusZone
              onClick={this.getWords}
              synonimus={synonimus}
              handleWordReplace={this.handleWordReplace}
            />
          </FileZone>
        </Main>
      </AppContainer>
    );
  }
}

export default App;
