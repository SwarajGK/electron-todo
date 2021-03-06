import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  .left-panel {
    flex-grow: 1;
    padding: 10px;
  }
  .right-panel {
    flex-grow: 5;
    padding: 25px;
  }
`;
