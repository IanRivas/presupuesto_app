import styled from 'styled-components';

export const Modaldiv = styled.div`
    top: 0;
    position: fixed;
    left: 0;
    display: block;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
    .exit{
        height: inherit;
        width: inherit;
        top:0;
        left: 0;
        position: absolute;
    }
    .modalMain {
        position:fixed;
        background: white;
        width: 40%;
        height: 245px;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        padding: 15px 15px;
        z-index: 1;
        border-radius: 5px;
        div:first-child{
            position: relative;
            margin-bottom: 20px;
            & h4 {
                margin-top: 5px;
            }
            .closebtn{
                background-color: tomato;
                color: white;
                position: absolute;
                top: 0;
                right: 0;
                border-radius: 5px;
                padding: 2px 5px;;
            }
        }
        .inputModal{
            display: flex;
            justify-content: start;
            flex-direction: column;
            span{
                text-align: left;
            }
        }
        .btn-container{
            display: flex;
            justify-content: center;
            align-items: center;
            .btnAgregar{
                margin: 15px 0;
                width: 20%;
            }
        }
    
    }
`;
