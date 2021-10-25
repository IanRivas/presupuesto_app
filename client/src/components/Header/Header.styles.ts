import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 5px 5px ${(props) => props.theme.box};
  background-color: ${(props) => props.theme.rest};
  position: sticky;
  z-index: 10;
  top: 0;
  right: 0;
  & div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    & h2 {
      font-size: clamp(1rem, 5vw, 2.5rem);
      color: ${(props) => props.theme.fontColor};
    }
    & button {
      height: 50px;
      display: flex;
      align-self: center;
      align-items: center;
      background-color: ${(props) => props.theme.rest};
      color: ${(props) => props.theme.fontColor};
      border: none;
      font-size: clamp(0.8rem, 4vw, 1.5rem);
      padding: 0 15px;
      gap: 10px;
      & img {
        height: 50%;
      }
      &:hover {
        border: 1px solid rgb(32, 178, 170);
      }
    }
  }
`;
