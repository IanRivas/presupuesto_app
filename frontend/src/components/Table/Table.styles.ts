import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 85%;
  min-width: 850px;
  margin: 0px auto;
  overflow-x: auto;
  padding: 0 50px;
  padding-bottom: 50px;
  background-color: ${(props) => props.theme.body};
  & > h2 {
    color: ${(props) => props.theme.fontColor};
  }
  & > div {
    display: grid;
    grid-auto-rows: 5rem;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    border-top: 1px solid ${(props) => props.theme.fontColor};
    gap: 80px;
    color: ${(props) => props.theme.fontColor};
    & .container-buttons {
      padding: 10px;
      & button {
        display: inline-block;
        width: 48%;
        text-align: center;
        padding: 10px;
        outline: none;
        border:none;
        border-radius: 5px;
      }
      & .delete-btn{
        background-color: #E44D41;
      }
      & .edit-btn{
        margin-right: 2px;
        background-color: #5480B4;
      }
    }
    & > button{
      display: flex;
      justify-content:center;
      align-items:center;
      background-color: #3398D9;
      outline: none;
      border:none;
      border-radius: 5px;
      padding: 10px;
      & span{
        color: white;
        margin-right: 5px;
      }
    }
  }
  & > div:nth-child(2){
    border-bottom: 3px solid ${(props) => props.theme.fontColor};
  }
`;
