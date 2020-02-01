import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const Header = styled.header`
  display: block;
  height: 40px;
  padding-left: 15px;
  padding-top: 15px;
  font-size: 24px;
  border-bottom: 4px solid #ffa500;
  background-color: rgba(33, 33, 33, 0.5);
  color: #fff;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export { AppContainer, Header, Main };
