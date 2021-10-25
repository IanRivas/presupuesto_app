import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 85%;
  margin: 0px auto;
  padding-bottom: 50px;
  display: grid;
  grid-auto-rows: 32rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: 80px;
  background-color: ${(props) => props.theme.body};
`;