import React from 'react';
import styled from 'styled-components';

const SynonimusSection = styled.section`
  margin-top: 15px;
  width: 600px;
  flex-grow: 1;
  background-color: grey;
  border: 1px solid #e4dede;
`;

const ListSection = styled.ul`
  padding: 0 0 0 15px;
  margin: 0;
  list-style: none;
  min-height: 300px;
`;

const WordSection = styled.li`
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 5px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const SynonimusCmp = ({ onClick, synonimus, handleWordReplace }) => {
  return (
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
};

export default SynonimusCmp;
