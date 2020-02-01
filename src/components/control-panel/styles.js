import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => (props.isAppliedStyle ? 'blue' : 'grey')};
`;

const Controlpanel = styled.div`
  background-color: #fff;
  height: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5px;
`;

const FormatActions = styled.div`
  width: 200px;
  margin-right: 400px;
`;

export { StyledButton, FormatActions, Controlpanel };
