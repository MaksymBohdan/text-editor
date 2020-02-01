import React from 'react';
import {
  SynonimusSection,
  ListSection,
  WordSection,
  ButtonSection
} from './styles';

const SynonimusCmp = ({ onClick, synonimus, handleWordReplace }) => (
  <SynonimusSection>
    <ButtonSection>
      <button onClick={onClick} type="button">
        Similar word
      </button>
    </ButtonSection>
    <ListSection>
      {synonimus.map(({ word }) => (
        <WordSection key={word}>
          {word}{' '}
          <button data-name={word} onClick={handleWordReplace}>
            replace
          </button>
        </WordSection>
      ))}
    </ListSection>
  </SynonimusSection>
);

export default SynonimusCmp;
