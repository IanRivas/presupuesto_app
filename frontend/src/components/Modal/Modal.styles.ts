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
        height: 235px;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        padding: 15px 15px;
        z-index: 1;
        div:first-child{
            position: relative;
            margin-bottom: 20px;
            .closebtn{
                position: absolute;
                top: 0;
                right: 0;
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
        .btnAgregar{
            margin-top: 15px;
            width: 20%;
        }
    
    }
`;
