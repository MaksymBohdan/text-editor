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

export { SynonimusSection, ListSection, WordSection, ButtonSection };
